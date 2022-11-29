<script>
import {daysScheduledOff} from "../../../store/daysOffSchedule_store"

let title = "one"
let startDate = "2022-12-25"
let endDate = "2022-12-25" // if not changed event is only one day
let eventType = "fun"


const formStatus = {isDisabled: true, info:"title"}

// update strore

function clearInputs (){
    title=""
    startDate =""
    endDate=""
    eventType=""
}
$:{
    // check Items for emptys

}


function handleSubmit (){
    if (!formStatus?.isDisabled) {
        let tempNumber = $daysScheduledOff.length + 1
        const Items = {title,startDate,endDate,eventType,_id:tempNumber}
        console.log(Items)
        // Save to local data base, 
        daysScheduledOff.update((currentState) => [Items,...currentState])
        
        clearInputs()
    }
    alert(`Missing ${formStatus.info}`)
}



</script>

<form on:submit|preventDefault={handleSubmit}>
    <label>
        title
        <input bind:value={title} type=text/>
    </label>
    <label>
        Start Date:
        <input bind:value={startDate}  type=date/>
    </label>
    <label>
         End Date:
        <input  bind:value={endDate}  type=date/>
    </label>
    <label>
        type of day:
        <input bind:value={eventType}  type=text/>
    </label>
	<button type="submit">
        Please save me
	</button>

</form>


<style>
    form{
        display:grid;

    }
    label{
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }
</style>