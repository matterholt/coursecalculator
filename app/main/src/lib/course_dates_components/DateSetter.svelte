<script>
  import ColumnFlexContainer from "../base_componets/ColumnFlexContainer.svelte";
  import CalcualtedDates from "./components/CalcualtedDates.svelte";
  import DateInput from "./components/DateInput.svelte";

  import { courseSpanDates } from "../../store/dateSetter_store";
  let dates = {};
  courseSpanDates.subscribe((value) => (dates = value));
</script>

<ColumnFlexContainer>
  <DateInput objectKey="start" title="Start Date :" />
  <DateInput objectKey="end" title="End Date :" />
  <CalcualtedDates />
</ColumnFlexContainer>

<style>
</style>
