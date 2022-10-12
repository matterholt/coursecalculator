<script>
  import LockInDate from "./LockInDate.svelte";

  export let dateToAdjust;
  export let title;

  let dateLocked = false;
</script>

<label class:locked={dateLocked === true} class:unlocked={dateLocked === false}>
  {title}
  {dateLocked ? "LOCKED" : ""}
  <div class="container_input">
    {#if dateLocked === false}
      <input type="date" bind:value={dateToAdjust} disabled={dateLocked} />
    {:else}
      <p>{dateToAdjust}</p>
    {/if}
    <LockInDate bind:dateIsFixed={dateLocked} />
  </div>
</label>

<style>
  .locked {
    background-color: rgb(17, 11, 11);
    color: white;
  }
  .unlocked {
    background-color: rgb(255, 255, 255);
    color: black;
  }
  .container_input {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    height: min-content;
    width: 200px;
  }
  p {
    margin: 0px;
    padding: 2px;
    width: 95px;
    height: 37px;
  }
  input {
    padding: 2px;
    width: 95px;
    height: 37px;
  }
</style>
