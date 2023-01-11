<script>

  import DateInput from "./components/DateInput.svelte";


</script>

  <div class="date_sets">

    <DateInput
    objectKey="start"
    title="Start Date :"
    />
    <DateInput
    objectKey="end"
    title="End Date :"
    />
  </div>

<style>
  .date_sets{
    display: flex;
    justify-content: space-evenly;
    width:550px;
    background-color:var(--main-theme-mid);
    margin-bottom: 20px;
  }

</style>
