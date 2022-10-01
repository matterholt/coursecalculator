<script>
  import Greet from "./lib/Greet.svelte";
  import DateSetter from "./lib/DateSetter.svelte";

  import { startDate, endDate } from "./store/store";

  let dateOfStart;
  let dateOfEnd;

  startDate.subscribe((value) => {
    dateOfStart = value;
  });

  endDate.subscribe((value) => {
    dateOfEnd = value;
  });
</script>

<main class="container">
  <h1>Course Calculator</h1>
  <div class="row spread">
    <p>{dateOfStart}</p>
    <p>{dateOfEnd}</p>
  </div>
  <div class="row ">
    <DateSetter />
  </div>
</main>

<style>
  .spread {
    justify-content: space-evenly;
  }
</style>
