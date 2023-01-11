
<script>
    import CalcualtedDates from "../school_year_calculations/CalcualtedDates.svelte"
    import {NationalHolidays,ScheduledDaysOff,DateSetter,WorkWeekSchedule,} from "../school_year_setting_components/index.js"

    import {TabbedMenu,TabPanelDisplay,TabList,Tab} from "../base_componets/TabMenu/index";

   

  </script>
  <div class="column">
    <div class="information_container">
      <DateSetter />


      <div class="projected_date">
        <div class="assign_schooldays">number of school days</div> 
        <div class="assign_OFFdays">number of OFF days</div> 

      </div>
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
<CalcualtedDates/>
  </div>

  <style>
    .projected_date{
      width:550px;
      display: grid;
      grid-template-columns: 75% 25%;
    }
    .assign_schooldays{
      background:rebeccapurple;

    }
    .assign_OFFdays{
      background-color: cadetblue;
    }
    .column {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
    .information_container{

    }

  </style>