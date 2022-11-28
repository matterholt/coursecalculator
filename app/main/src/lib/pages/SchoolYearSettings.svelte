
<script>
  import CalcualtedDates from "../school_year_calculations/CalcualtedDates.svelte"
    import DateSetter from "../school_year_setting_components/DateSetter.svelte"
    import WorkWeekSchedule from '../school_year_setting_components/WorkWeekSchedule.svelte'
    import ScheduledDaysOff from "../school_year_setting_components/ScheduledDaysOff.svelte"
  </script>
  <div class="column">
    <CalcualtedDates />
    <DateSetter />
    <WorkWeekSchedule/>
   <ScheduledDaysOff />
  </div>

  <style>
    .column {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  </style>