<script>
import {daysScheduledOff} from "../../../store/daysOffSchedule_store"

$: title = ""
$: startDate = ""
$: endDate = ""
$: eventType = ""

let eventIsMultipleDays = false
$: formIsOkToSubmit = false


const formStatus = {isDisabled: true, info:"title"}

// update strore

function clearInputs (){
    title=""
    startDate =""
    endDate=""
    eventType=""
}


$:{
    let formInputs = [title,startDate,eventType]
    console.log(`add this ${formInputs}`)
    const emptyInputs = formInputs.includes("")
    if (!emptyInputs){
        console.log("Inputs are there and form can be submited")
        formIsOkToSubmit = true
    }else{
        console.log("throw some error")

    }
}


function handleSubmit (){
    if (formIsOkToSubmit){
        let tempNumber = $daysScheduledOff.length + 1
        const Items = {title,startDate,endDate,eventType,_id:tempNumber}
        console.log(Items)
        // Save to local data base, 
        daysScheduledOff.update((currentState) => [Items,...currentState])
        }

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
    {#if eventIsMultipleDays}
<div class="button_container">

    <label>
        End Date:
        <input  bind:value={endDate}  type=date/>
    </label>
    <button class="button_exit" on:click={()=> eventIsMultipleDays=!eventIsMultipleDays}>X</button>
</div>

    {:else}
    <button on:click={()=> eventIsMultipleDays=!eventIsMultipleDays}>End Date</button>
    {/if}

    <label>
        type of day:
        <input bind:value={eventType}  type=text/>
    </label>
    
	<button 

    type="submit">
        Please save me {formIsOkToSubmit}
	</button>
{#if formIsOkToSubmit}
    <p>OK to Submit</p>
    {:else}
    <p>not able to submit</p>
{/if}
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
    .button_exit{
        font-size: 10px;
        background-color: white;
        color: gray;
        font-weight: 900;
        display: grid;
        place-self: center;
    }
    .button_container{
        display:grid;
        place-self: center;
    }
</style>