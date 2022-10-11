<script>
  let dateControl;
  let dateToAdjust;
</script>

<input
  class:locked={dateControl === true}
  class:unlocked={dateControl === false}
  type="date"
  bind:value={dateToAdjust}
  disabled={dateControl}
/>
