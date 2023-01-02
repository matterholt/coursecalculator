
<script>
  import CalcualtedDates from "../school_year_calculations/CalcualtedDates.svelte"
    import DateSetter from "../school_year_setting_components/DateSetter.svelte"
    import WorkWeekSchedule from '../school_year_setting_components/WorkWeekSchedule.svelte'
    import ScheduledDaysOff from "../school_year_setting_components/ScheduledDaysOff.svelte"
    import {TabbedMenu,TabPanelDisplay,TabList,Tab} from "../base_componets/TabMenu/index";


  </script>
  <div class="column">
    <CalcualtedDates />

    <DateSetter />
    <TabbedMenu>
      <TabList>
        <Tab>Day Per week</Tab>
        <Tab>Vacation</Tab>
        <Tab>Holidays</Tab>
      </TabList>


      <TabPanelDisplay>
        <WorkWeekSchedule/>
      </TabPanelDisplay>

      <TabPanelDisplay>
        <ScheduledDaysOff />
      </TabPanelDisplay>

    </TabbedMenu>

  </div>

  <style>
    .column {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

  </style>