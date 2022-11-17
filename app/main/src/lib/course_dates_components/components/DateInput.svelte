<script>

  import { courseSpanDates,activeSetDate } from "../../../store/dateSetter_store";
  import { onDestroy } from "svelte";
  import LockInDate from "./LockInDate.svelte";

  const dayKey = {
    start : "isStartDateLocked",
    end : "isEndDateLocked"
  }

  export let objectKey;
  export let title;
  

  // control which date should be fixed
  let dateLocked 
  const unsubscribeActiveDateStore = activeSetDate.subscribe((data) => {
    return dateLocked = data[dayKey[objectKey]]
  });
  onDestroy(unsubscribeActiveDateStore);

  // defined dates to save
  let dates = {};
  courseSpanDates.subscribe((data) => (dates = data));
  let dateToAdjust = dates?.[objectKey];
  function handleChange() {
    // need to update the state on store
    courseSpanDates.update(n => n = {...dates,[objectKey]:dateToAdjust})

  }
  const unsubscribe = courseSpanDates.subscribe((value) => {
    dates = value;
  });
  onDestroy(unsubscribe);


</script>

<label class:locked={dateLocked === true} class:unlocked={dateLocked === false}>
  {title}
  <div class="container_input">
    <LockInDate
    bind:inputLocked={dateLocked}
    bind:objectKey={dayKey[objectKey]} />
    {#if dateLocked === false}
      <input
        class="customInput"
        type="date"
        bind:value={dateToAdjust}
        on:change={() => handleChange()}
      />
    {:else}
      <div class="customInput  inputvalue_locked">
        <p>{dateToAdjust}</p>
      </div>
    {/if}
  </div>
</label>

<style>
  .locked {
    background-color: rgb(68, 65, 65);
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
    justify-content: space-between;
    padding: 5px;
    border-radius: var(--radius-sm);
  }
  label {
    display: flex;
    flex-direction: column;
    text-align: center;
    height: min-content;
    border-radius: var(--radius-sm);
    width: 150px;
    padding: 5px;
    box-shadow: var(--shawdow-sm);
  }
  .inputvalue_locked {
    color: rgb(131, 117, 117);
    font-weight: 900;
    display: grid;
    place-items: center;
  }
  .customInput {
    padding: 2px;
    width: 95px;
    height: 37px;
  }

  p {
    margin: 0px;
    padding: 0;
  }
</style>
