<script>
  import ColumnFlexContainer from "../base_componets/ColumnFlexContainer.svelte";

  //   import { startDate, endDate } from "../store/store";

  let startDate = "";
  let endDate = "";
  //   startDate.set(1)
  //   endDate.set(1)
  //   $: console.log(startDate);
</script>

<ColumnFlexContainer>
  <label>
    Start Date:
    <input type="date" bind:value={startDate} />
  </label>
  <label>
    Projected End Date:
    <input type="date" bind:value={endDate} />
  </label>
</ColumnFlexContainer>

<style>
  label {
    display: flex;
    flex-direction: column;
    height: min-content;
  }
  input {
    padding: 5px;
  }
</style>
