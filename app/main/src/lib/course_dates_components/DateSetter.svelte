<script>
  import { createEventDispatcher } from 'svelte';
  import ColumnFlexContainer from "../base_componets/ColumnFlexContainer.svelte";
  import CalcualtedDates from "./components/CalcualtedDates.svelte";
  import DateInput from "./components/DateInput.svelte";

  let activeSetDate = {
    isStartDateLocked: false,
    isEndDateLocked: false
  };


  function handleIt(pos) {
    console.log("from date setter");
    if (pos === "start" && !activeSetDate.isStartDateLocked) {
      activeSetDate.isStartDateLocked = true;
      activeSetDate.isEndDateLocked = false;
    } else if (pos === "end" && !activeSetDate.isEndDateLocked) {
      activeSetDate.isStartDateLocked = false;
      activeSetDate.isEndDateLocked = true;
    } else {
      activeSetDate.isStartDateLocked = false;
      activeSetDate.isEndDateLocked = false;
    }
  }
</script>

<ColumnFlexContainer>
  <DateInput
    objectKey="start"
    title="Start Date :"
  />
  <DateInput
    objectKey="end"
    title="End Date :"
  />
  <CalcualtedDates />
</ColumnFlexContainer>

<style>
</style>
