<script>
  import { onDestroy } from "svelte";

  import dayjs from "dayjs";
  import duration from "dayjs/plugin/duration";
  dayjs.extend(duration);

  import { courseSpanDates,numbOfClassDayPerWeek } from "../../store/dateSetter_store";
  let dates = {};
  courseSpanDates.subscribe((value) => (dates = value));

  $numbOfClassDayPerWeek
  $: console.log($numbOfClassDayPerWeek)

  $: end = dayjs(dates.end);

  $: numberOfMonths = end.diff(dates.start, "month");
  $: numberOfWeeks = end.diff(dates.start, "week");
  $: numberOfSchoolDays = numberOfWeeks * 5;

  // remove week days

  const unsubscribe = courseSpanDates.subscribe((value) => {
    dates = value;
  });
  onDestroy(unsubscribe);
</script>

<div>
  <ul>
    <li>numb week days <br />of school: <span>{$numbOfClassDayPerWeek}</span></li>
    <li>Months: <span>{numberOfMonths}</span></li>
    <li>Weeks: <span>{numberOfWeeks}</span></li>
    <li>Days: <span>{numberOfSchoolDays}</span></li>
    <li>{dates.start}</li>
    <li>{dates.end}</li>
  </ul>
</div>
