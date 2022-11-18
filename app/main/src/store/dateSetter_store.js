import { writable } from 'svelte/store';

export let startDate = writable( );
export let endDate = writable("2023/05/13");

export const courseSpanDates = writable(
    {
        start : "2022-11-06",
        end : "2023-05-13",
    }
)
export let activeSetDate =  writable({
  isStartDateLocked : false,
  isEndDateLocked : false
})




// export function adjust_dates (whatToggle){
// export function adjust_dates (whatToggle){
//     console.log("from date setter store");
//     if (whatToggle === "start" && !fixedStartDate) {
//       fixedStartDate = true;
//       fixedStartDate = false;
//     } else if (whatToggle === "end" && !fixedStartDate) {
//       fixedStartDate = false;
//       fixedStartDate = true;
//     } else {
//       fixedStartDate = false;
//       fixedStartDate = false;
//     }

// } 