<script>
    export let scheduleEvent

    $:({description,summary,start,end,_id} = scheduleEvent)


</script>

        <li>
          {summary}
          <div>
          {description}
          <span>{summary}</span>
        </div>
          <div>
            <span>{start.dateTime}</span>
            <span>{end.dateTime}</span>
          </div>
          <div >
            <div class="actions">[change {_id}]</div>
            <div class="actions"> [delete {_id}]</div>
          </div>
        </li>



<style>
  .actions{
    background-color: gray;
    padding: 2px;
    margin:1px;
  }

  li {
    display:flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid white;
    margin: 15px 0px;
    border-radius: 5px;
    border:solid black 1px;
    padding:5px;
  }
  div{
    display: flex;
    flex-direction: column;
  }
</style>