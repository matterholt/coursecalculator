<script>
  import ColumnFlexContainer from "../base_componets/ColumnFlexContainer.svelte";
  import CalcualtedDates from "./components/CalcualtedDates.svelte";
  import DateInput from "./components/DateInput.svelte";


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
