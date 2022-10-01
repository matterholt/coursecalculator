<script>
  //   import { startDate, endDate } from "../store/store";

  let startDate = "";
  let endDate = "";
  //   startDate.set(1)
  //   endDate.set(1)
  //   $: console.log(startDate);
</script>

<div class="datesetter__containter">
  <p>THIS IS THE DATE {startDate}</p>
  <label>
    Start Date:
    <input type="date" bind:value={startDate} />
  </label>
  <label>
    Projected End Date:
    <input type="date" bind:value={endDate} />
  </label>
</div>

<style>
  .datesetter__containter {
    display: flex;
    outline: solid;
  }
</style>
