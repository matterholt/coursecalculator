<script>
  import FlexContainer from "../base_componets/FlexContainer.svelte";
  import DateInput from "./components/DateInput.svelte";


</script>

  <FlexContainer flexDir="column" solid="">

    <DateInput
    objectKey="start"
    title="Start Date :"
    />
    <DateInput
    objectKey="end"
    title="End Date :"
    />
  </FlexContainer>

<style>
</style>
