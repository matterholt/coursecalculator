
<script>
  import {numbOfClassDayPerWeek} from "../../store/dateSetter_store"
  import FlexContainer from "../base_componets/FlexContainer.svelte";
    import ScheduleDateOffForm from "./components/ScheduleDateOffForm.svelte";
    import ScheduleDayListed from "./components/ScheduleDayListed.svelte";

  const datesScheduledOff =[
    {
      type: "holiday",
      _id : 101,
      startDate : "2022-12-25",
      endDate : "2022-12-30",
      title : "Christmas Break"
    },    {
      type: "Vaction",
      _id : 201,
      startDate : "2022-04-05",
      endDate : null,
      title : "Short Family Trip"
    }
  ]



</script>
<FlexContainer  >
  <h2>Days Off from school</h2>
  <div>
    <ScheduleDateOffForm />

  </div>

  <div>
    <h3>Listed days</h3>
    <ul>
        {#each datesScheduledOff as scheduleEvent}
        <ScheduleDayListed {scheduleEvent}/>
        {/each}
    </ul>
  </div>

</FlexContainer>

<style>


</style>