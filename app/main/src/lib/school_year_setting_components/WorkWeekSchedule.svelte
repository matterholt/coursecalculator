<script>
  import ColumnFlexContainer from "../base_componets/ColumnFlexContainer.svelte";
  import DaySelector from "./components/DaySelector.svelte";

  let dayOfWeek = {
    Mon:true,
    Tues:true,
    Wed:true,
    Thurs:true,
    Fri:true,
    Sat:false,
    Sun:false
  }
  let weekDays = Object.keys(dayOfWeek)
  $: numberOfSchooldaysPerweek = 2
  $: console.log('alway run',dayOfWeek)

  // update active list
  function updateState (day,state){
    const newDayActive = {[day]: state }

    console.log("onchange",newDayActive)
    dayOfWeek = {...dayOfWeek, ...newDayActive}

  }

</script>
<ColumnFlexContainer>
  <h2>{numberOfSchooldaysPerweek} of days of school per week</h2>
  {JSON.stringify(dayOfWeek)}



  <div class="container">
    {#each weekDays as day}

      <DaySelector {day}  isActive={dayOfWeek[day]} {updateState}/>
    {/each}
  </div>
</ColumnFlexContainer>

<style>
  .container{
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 90%;
  }

</style>