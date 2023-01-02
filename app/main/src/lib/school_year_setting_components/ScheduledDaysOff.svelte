
<script>
  import {daysScheduledOff} from "../../store/daysOffSchedule_store"
  import FlexContainer from "../base_componets/FlexContainer.svelte";
  import ScheduleDateOffForm from "./components/ScheduleDateOffForm.svelte";
  import ScheduleDayListed from "./components/ScheduleDayListed.svelte";


  $: daysOff = $daysScheduledOff

</script>
<FlexContainer  >
  <h2>Days Off from school</h2>
  <p>enable Google to link, better to make request and save request though Google</p>
  <p>follow format so can save to google calenders</p>
  <div style="display:none;">
    <ScheduleDateOffForm />
  </div>

  <div>
    <h3>Listed days</h3>
    <ul>
        {#each daysOff as scheduleEvent}
        <ScheduleDayListed {scheduleEvent}/>
        {/each}
    </ul>
  </div>
.
</FlexContainer>

<style>
  p{
    font-size: 10px;
    text-transform: uppercase;

  }
  ul{
    margin:0;
    list-style: none;
    width: 550px;

  }


</style>