<script>
  import {activeSetDate} from "./store/dateSetter_store"
  import DateSetter from "./lib/course_dates_components/DateSetter.svelte";



	let countValue;

	activeSetDate.subscribe(value => {
		countValue = value;
	});
</script>

<main class="container">
  <h1>Course Calculator</h1>
  <p> {JSON.stringify(countValue)}</p>
  <div class="column">
    <DateSetter />
  </div>
</main>

<style>
  .column {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
</style>
