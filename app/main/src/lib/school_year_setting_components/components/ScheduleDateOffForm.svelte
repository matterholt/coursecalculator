<script>


let title = "one"
let dateEventStart = "2018-07-22"
let dateEventEnd = "2018-11-22" // if not changed event is only one day
let evetType = "fun"


// update strore


function handleSubmit (){
    title=""
    dateEventStart =""
    dateEventEnd=""
    evetType=""
    console.log('go get it')
    // Save to local data base, 

}


</script>

<form on:submit|preventDefault={handleSubmit}>
    <label>
        title
        <input bind:value={title} type=text/>
    </label>
    <label>
        Start Date:
        <input bind:value={dateEventStart}  type=date/>
    </label>
    <label>
         End Date:
        <input  bind:value={dateEventEnd}  type=date/>
    </label>
    <label>
        type of day:
        <input bind:value={evetType}  type=text/>
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