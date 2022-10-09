<script>
  import ColumnFlexContainer from "../base_componets/ColumnFlexContainer.svelte";
  import LockInDate from "./components/LockInDate.svelte";
  import CalculatedDates from "./components/CalcualtedDates.svelte";

  // import { startDate, endDate } from "../../store/store";

  export let startDate = "2022-11-06";
  export let endDate = "2023-05-13";

  let startDateIsFixed = true;
  let endDateIsFixed = false;

  // active method of calcualtion

  function adjustDate() {
    if (startDateIsFixed && endDateIsFixed) {
      alert("Start and End date are fixed, waz up!");
      return;
    }
    if (startDateIsFixed) {
      //add date to end date
      alert("have added or remove days from course, end date is addjusted");
      return;
    }
    if (endDateIsFixed) {
      alert("have added or remove days from course, start date is addjusted");
      return;
    }
  }
</script>

<ColumnFlexContainer>
  <label>
    Start Date: {startDateIsFixed ? "LOCKED" : ""}
    <div class="container_input">
      <input type="date" bind:value={startDate} disabled={startDateIsFixed} />
      <LockInDate bind:dateIsFixed={startDateIsFixed} />
    </div>
  </label>
  <label>
    End Date: {endDateIsFixed ? "LOCKED" : ""}
    <div class="container_input">
      <input type="date" bind:value={endDate} disabled={endDateIsFixed} />
      <LockInDate bind:dateIsFixed={endDateIsFixed} />
    </div>
  </label>
  <CalculatedDates {startDate} {endDate} />
</ColumnFlexContainer>

<style>
  .container_input {
    display: flex;
    flex-direction: row;
  }
  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    height: min-content;
    width: 200px;
  }
  input {
    padding: 2px;
  }
</style>
