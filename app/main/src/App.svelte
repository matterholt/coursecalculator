<script>
  import DateSetter from "./lib/date_setter_components/DateSetter.svelte";
</script>

<main class="container">
  <h1>Course Calculator</h1>
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
