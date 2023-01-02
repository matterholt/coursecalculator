<script>
  //https://dev.to/monfernape/get-country-holidays-using-google-calendar-api-3dh6
    const nationalHolidays = [
      {
        "kind": "calendar#event",
        "etag": "\"3262600847118000\"",
        "id": "20220417_3s7sr1qa2d9o9oe5cbgd3b6ju0",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MjAyMjA0MTdfM3M3c3IxcWEyZDlvOW9lNWNiZ2QzYjZqdTAgZW4udXNhI2hvbGlkYXlAdg",
        "created": "2021-09-10T19:00:23.000Z",
        "updated": "2021-09-10T19:00:23.559Z",
        "summary": "Easter Sunday",
        "description": "Observance\nTo hide observances, go to Google Calendar Settings > Holidays in United States",
        "creator": {
          "email": "en.usa#holiday@group.v.calendar.google.com",
          "displayName": "Holidays in United States",
          "self": true
        },
        "organizer": {
          "email": "en.usa#holiday@group.v.calendar.google.com",
          "displayName": "Holidays in United States",
          "self": true
        },
        "start": {
          "date": "2022-04-17"
        },
        "end": {
          "date": "2022-04-18"
        },
        "transparency": "transparent",
        "visibility": "public",
        "iCalUID": "20220417_3s7sr1qa2d9o9oe5cbgd3b6ju0@google.com",
        "sequence": 0,
        "eventType": "default"
      }
    ]
    const odverved_Holidays = []
</script>

<ul>
    {#each nationalHolidays as item}
    <li>{item.summary} Start: {item.start.date} End: {item.end.date}</li>
{/each}
</ul>