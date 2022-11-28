<script>
    export let scheduleEvent

    $:({title,startDate,endDate,type} = scheduleEvent)


</script>

        <li>
          {title}
          <span>{startDate}</span>
          <span>{endDate}</span>
          <span>{type}</span>
          <span>[cange],[delte]</span>


        </li>