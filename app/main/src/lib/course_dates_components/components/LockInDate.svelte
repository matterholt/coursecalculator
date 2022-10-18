<script>
  import { createEventDispatcher } from "svelte";
  import { adjust_dates } from "../../../store/dateSetter_store";
  const dispatch = createEventDispatcher();
  let dateIsFixed;

  function updateValue() {
    console.log("toggle input locker");
    dispatch("handleIt", dateIsFixed);
  }
</script>

<button
  class:locked={dateIsFixed === true}
  class:unlocked={dateIsFixed === false}
  class="boxsize"
  on:click={adjust_dates}>{dateIsFixed ? "||" : "O"}</button
>

<style>
  .boxsize {
    display: grid;
    place-items: center;
    background-color: white;
    width: 20px;
    height: 20px;
    font-size: 0.75em;
    border-radius: 50%;
  }
  button {
    margin: 0;
    padding: 0;
  }
  .locked {
    background-color: rgb(178, 64, 64);
  }
  .unlocked {
    background-color: rgb(59, 158, 59);
  }
</style>
