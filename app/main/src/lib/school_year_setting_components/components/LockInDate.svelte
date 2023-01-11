<script>
  import { onDestroy } from "svelte";
  import {activeSetDate} from "../../../store/dateSetter_store"
  export let objectKey
  
  // need to udpate what store
  export let inputLocked



  // Update the global state
  function adjust_dates(){
    inputLocked  = !inputLocked
    let udpateState = { [objectKey] : inputLocked}
    activeSetDate.update((state)=>  state = {...state, ...udpateState})
  }


</script>

<button
  class:locked={inputLocked === true}
  class:unlocked={inputLocked === false}
  class="boxsize"
  on:click={adjust_dates}>{inputLocked ? "||" : "O"}</button
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

    border-radius: 8px;
    border: 1px solid transparent;
  
  }
  .locked {
    background-color: rgb(178, 64, 64);
  }
  .unlocked {
    background-color: rgb(59, 158, 59);
  }
</style>
