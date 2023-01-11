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
    background-color: var(--main-theme-light);
    color: var(--main-theme-dark)
  }
  .unlocked {
    background-color: var(--main-theme-mid);
  }
  .container_input {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  
    border-radius: var(--radius-sm);

  }
  label {
    display: flex;
    flex-direction: column;
    text-align: center;
    height: min-content;
    width: 150px;
    color:var(--main-theme-light);

  }
  .inputvalue_locked {
    color: var(--main-theme-light);
    font-weight: 900;
    display: grid;
    place-items: center;
  }
  .customInput {
    color:var(--main-theme-light);
    border: 1px solid transparent;
    border-bottom: solid 2px var(--main-theme-light);
    padding:0;
    width: 95px;
    background-color: rgba(255, 255, 255, 0);

  }

  p {
    margin: 0px;
    padding: 0;
  }

</style>
