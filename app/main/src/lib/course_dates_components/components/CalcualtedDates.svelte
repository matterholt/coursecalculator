<script>
  import dayjs from "dayjs";
  import duration from "dayjs/plugin/duration";

  dayjs.extend(duration);

  export let startDate;
  export let endDate;

  $: end = dayjs(endDate);

  $: numberOfSchoolDays = end.diff(startDate, "days");
  $: numberOfWeeks = end.diff(startDate, "week");
  $: numberOfMonths = end.diff(startDate, "month");
</script>

<div>
  <ul>
    <li>Days: <span>{numberOfSchoolDays}</span></li>
    <li>Weeks: <span>{numberOfWeeks}</span></li>
    <li>Months: <span>{numberOfMonths}</span></li>
  </ul>
</div>
