<script>
  export let flexDir = 'column'
  export let solid = 'solid 1px white'

</script>

<div class="datecalculations__containter"style:border-bottom={solid} style:flex-direction={flexDir}>
  <slot />
</div>

<style>
  .datecalculations__containter {
    display: flex;
    justify-content: space-around;
    width: 90%;
    padding: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    align-items: center;
  }
</style>
