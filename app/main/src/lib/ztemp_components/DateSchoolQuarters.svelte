<script>

  import CouresSchedulueSettings from "./CouresSchedulueSettings.svelte";

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

<div>
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
</div>

<style>
</style>
