<script>
  import ColumnFlexContainer from "../base_componets/ColumnFlexContainer.svelte";
  import CouresSchedulueSettings from "./course_scheduling/CouresSchedulueSettings.svelte";

  let numberDaysOfCourse = "??";
  let numberWeeksOfCourse = "??";
  let numberDaysOff = "??";
  let isActiveSemesters = "true";
  let isActiveQuarters = "true";
  let isActiveCustom = "true";

  let semester = {
    length: "15wks",
  };
  let quarters = {
    length: "10-11wks",
  };
</script>

<ColumnFlexContainer>
  <div>
    <div>
      <CouresSchedulueSettings />
    </div>
    <div>
      <h2>Custom</h2>
      <ul>
        <li>Number Days: <span>{numberDaysOfCourse}</span></li>
        <li>Number Weeks: <span>{numberWeeksOfCourse}</span></li>
        <li>Number Hours: <span>{numberWeeksOfCourse}</span></li>
      </ul>
    </div>
    <div>
      <h2>Cousrse Quarters</h2>
      <ul>
        <li>Number Days: <span>{numberDaysOfCourse}</span></li>
        <li>Number Hours: <span>{numberWeeksOfCourse}</span></li>
        <li>Number Weeks: <span>{numberWeeksOfCourse}</span></li>
      </ul>
    </div>
    <div>
      <h2>Cousrse Semesters</h2>
      <ul>
        <li>Number Days: <span>{numberDaysOfCourse}</span></li>
        <li>Number Hours: <span>{numberWeeksOfCourse}</span></li>
        <li>Number Weeks: <span>{numberWeeksOfCourse}</span></li>
      </ul>
    </div>
  </div>
</ColumnFlexContainer>

<style>
</style>
