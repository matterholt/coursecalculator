<script>

    export let day =""
    export let isActive
    export let updateState

</script>

<label class:isActive class="dayContainer" on:click={updateState(day, isActive)}>
    {day}
    <input type=checkbox bind:checked={isActive} />
  </label>


  <style scoped>
      .isActive{
          font-weight: bold;
        background-color: rgb(148, 160, 160);
        color: rgb(26, 25, 25);
      }

    .dayContainer{
      height: 50px;
      min-width: 85px;
      padding: 0 2px;
      margin: 3px;
      border: solid white 1px;
      border-radius: 5px;
      display:grid;
      place-items: center;

    }
    input{
        display: none;
    }


  
  </style>