<script>
    export let scheduleEvent

    $:({title,startDate,endDate,eventType,_id} = scheduleEvent)


</script>

        <li>
          <div>
          {title}
          <span>{eventType}</span>
        </div>
          <div>
            <span>{startDate}</span>
            <span>{endDate}</span>
          </div>
          <div >
            <span>[change {_id}]</span>
            <span> [delete {_id}]</span>
          </div>
        </li>



<style>

  li {
    display:flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid white;
    margin: 15px 0px;
  }
  div{
    display: flex;
    flex-direction: column;
  }
</style>