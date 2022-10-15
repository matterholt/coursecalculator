import { writable } from 'svelte/store';

export let startDate = writable( );
export let endDate = writable("2023/05/13");

export const courseSpanDates = writable(
    {
        start : "2022-11-06",
        end : "2023-05-13",

    }
)


let fixedStartDate = false
let fixedEndDate = true


export function adjust_dates (changedDate){
    if (fixedStartDate){
        endDate = changedDate
        console.log(`Update end date to ${changedDate}`)

    }
    if (fixedEndDate){
        // startDate = changedDate
        console.log(`Update start date to ${changedDate}`)
    }
    if (fixedStartDate && fixedEndDate){
    alert('Both dates are locked')
    }

    // finally need to update which ever input comes in

} 