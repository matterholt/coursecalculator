<script>
  let cousreMethod = "";

  let schedulingMethods = ["semesters", " quarterly", "custom"];
</script>

<fieldset>
  <legend>Method of scheduling</legend>
  {#each schedulingMethods as method}
    <div class:active={cousreMethod === method}>
      <input
        type="radio"
        id={method}
        name="method_course_cal"
        value={method}
        bind:group={cousreMethod}
      />
      <label for="semesters">{method}</label>
    </div>
  {/each}
</fieldset>

<style>
  .active {
    background-color: rebeccapurple;
  }

  fieldset {
    display: flex;
  }
  div {
    width: 150px;
  }
</style>
