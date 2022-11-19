<script>
  import {numbOfClassDayPerWeek} from "../../store/dateSetter_store"
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

  function updateState (day){
    const newDayActive = !dayOfWeek[day]
    dayOfWeek = {...dayOfWeek, ...{[day]: newDayActive}}
  }
  $:{
    // update global store, 
   let numberOfSchooldaysPerweek = Object.entries(dayOfWeek).filter(([key, value]) => value === true).length
   numbOfClassDayPerWeek.set(numberOfSchooldaysPerweek)
    
  }



</script>
<ColumnFlexContainer>
  <h2>{$numbOfClassDayPerWeek} of days of school per week</h2>

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