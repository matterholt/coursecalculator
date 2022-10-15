<script>
  import dayjs from "dayjs";
  import duration from "dayjs/plugin/duration";
  dayjs.extend(duration);
  import { courseSpanDates } from "../../../store/dateSetter_store";
  let dates = {};
  courseSpanDates.subscribe((value) => (dates = value));

  $: end = dayjs(dates.end);

  $: numberOfSchoolDays = end.diff(dates.start, "days");
  $: numberOfWeeks = end.diff(dates.start, "week");
  $: numberOfMonths = end.diff(dates.start, "month");

  // remove week days
</script>

<div>
  <ul>
    <li>Days: <span>{numberOfSchoolDays}</span></li>
    <li>Weeks: <span>{numberOfWeeks}</span></li>
    <li>Months: <span>{numberOfMonths}</span></li>
    <li>{dates.start}</li>
    <li>{dates.end}</li>
  </ul>
</div>
