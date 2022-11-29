import { writable } from 'svelte/store';

export let daysScheduledOff = writable(
    [{ 
      eventType: "holiday",
      _id : 101,
      startDate : "2022-12-25",
      endDate : "2022-12-30",
      title : "Christmas Break"
    },
    {
      eventType: "Vaction",
      _id : 201,
      startDate : "2022-04-05",
      endDate : null,
      title : "Short Family Trip"
    }
  ] 
  );