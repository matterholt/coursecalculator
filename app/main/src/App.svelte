<script>
  import Greet from "./lib/Greet.svelte";
  import ColumnFlexContainer from "./lib/base_componets/ColumnFlexContainer.svelte";
  import DateSetter from "./lib/course_dates_components/DateSetter.svelte";
  import DateCalculations from "./lib/course_dates_components/course_scheduling/DateSchoolQuarters.svelte";
  import CouresSchedulueSettings from "./lib/course_dates_components/course_scheduling/CouresSchedulueSettings.svelte";

  import { startDate, endDate } from "./store/dateSetter_store";

  let dateOfStart;
  let dateOfEnd;

  startDate.subscribe((value) => {
    dateOfStart = value;
  });

  endDate.subscribe((value) => {
    dateOfEnd = value;
  });
</script>

<main class="container">
  <h1>Course Calculator</h1>
  <div class="column">
    <DateSetter />
  </div>
</main>

<style>
  .column {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
</style>
