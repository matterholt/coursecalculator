
<script>
    import CalcualtedDates from "../school_year_calculations/CalcualtedDates.svelte"
    import {NationalHolidays,ScheduledDaysOff,DateSetter,WorkWeekSchedule,} from "../school_year_setting_components/index.js"

    import {TabbedMenu,TabPanelDisplay,TabList,Tab} from "../base_componets/TabMenu/index";


  </script>
  <div class="column">
    <div class="information_container">
      <DateSetter />

    </div>


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

      <TabPanelDisplay>
        <NationalHolidays />
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
    .information_container{

    }

  </style>