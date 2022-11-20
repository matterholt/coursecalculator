<script>
  import { onDestroy } from "svelte";
  import FlexContainer from "../base_componets/FlexContainer.svelte";


  import dayjs from "dayjs";
  import duration from "dayjs/plugin/duration";
  dayjs.extend(duration);

  import { courseSpanDates,numbOfClassDayPerWeek } from "../../store/dateSetter_store";
  let dates = {};
  courseSpanDates.subscribe((value) => (dates = value));

  $: end = dayjs(dates.end);

  $: numberOfMonths = end.diff(dates.start, "month");
  $: numberOfWeeks = end.diff(dates.start, "week");
  $: numberOfSchoolDays = numberOfWeeks * $numbOfClassDayPerWeek;

  // TODO, Move all calculations to RUST which will return the calculated json 

  const unsubscribe = courseSpanDates.subscribe((value) => {
    dates = value;
  });
  onDestroy(unsubscribe);
</script>

<FlexContainer flexDir="row">
  <ul>
    <li>number week days <br />of school: <span>{$numbOfClassDayPerWeek}</span></li>
    <li>numb Vacation days <br />of school: <span>{$numbOfClassDayPerWeek}</span></li>

  </ul>
  <ul>
    <li>Months: <span>{numberOfMonths}</span></li>
    <li>Weeks: <span>{numberOfWeeks}</span><br><span class="average">Average: {26} wks</span></li>
    <li>Days: <span>{numberOfSchoolDays} </span><br><span class="average">Average: {150} days</span></li>
  </ul>
  <ul>
    <li>{dates.start}</li>
    <li>{dates.end}</li>
  </ul>
</FlexContainer >
<style>

  .average{
    font-weight: 100;
    font-size: 0.75em;
    padding-left: 50px;
  }
</style>
