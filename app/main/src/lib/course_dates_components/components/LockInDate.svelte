<script>
  export let dateIsFixed;
  let boxsize;
</script>

<div
  class:locked={dateIsFixed === true}
  class:unlocked={dateIsFixed === false}
  class:boxsize
>
  <button on:click={() => (dateIsFixed = !dateIsFixed)}
    >{dateIsFixed ? "O" : "||"}</button
  >
</div>

<style>
  .boxsize {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
  }
  .locked {
    background-color: red;
  }
  .unlocked {
    background-color: green;
  }
</style>
