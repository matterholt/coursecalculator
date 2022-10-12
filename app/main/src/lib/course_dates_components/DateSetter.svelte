<script>
  import ColumnFlexContainer from "../base_componets/ColumnFlexContainer.svelte";
  import LockInDate from "./components/LockInDate.svelte";
  import CalculatedDates from "./components/CalcualtedDates.svelte";
  import DateInput from "./components/DateInput.svelte";

  let startDate = "2022-11-06";
  let endDate = "2023-05-13";
</script>

<ColumnFlexContainer>
  <DateInput bind:dateToAdjust={startDate} title="Start Date :" />
  <DateInput bind:dateToAdjust={endDate} title="End Date :" />

  <CalculatedDates {startDate} {endDate} />
</ColumnFlexContainer>

<style>
</style>
