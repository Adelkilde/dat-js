"use strict";
// array of time objects
const times = [
    {
        disciplin: "butterfly",
        time: "13:50:00",
        uid: "LWPSKpRvx7Htyjlb8JqV"
    },
    {
        disciplin: "butterfly",
        time: "11:02:03",
        uid: "ie2gUpGcsSfd4mBwLxtY"
    },
    {
        disciplin: "butterfly",
        time: "01:02:05",
        uid: "ie2gUpGcsSfd4mBwLxtY"
    },
    {
        disciplin: "butterfly",
        time: "09:02:30",
        uid: "LWPSKpRvx7Htyjlb8JqV"
    }
];

// Show the times array with console.table
console.table(times);

// Sort times with compareTime function
times.sort(compareTime);

// compareTime takes to parameters
function compareTime(time1, time2) {
    // convert time from string to a Date object
    const timeDate1 = new Date("2023-05-24T" + time1.time); // the date dosen't matter as long as both are the same
    const timeDate2 = new Date("2023-05-24T" + time2.time); // T marks the beginning of the time: HH:MM:SS
    // subtract the to getTime() values - getTime() returns the time in milliseconds since midnight, January 1, 1970 UTC.
    return timeDate1.getTime() - timeDate2.getTime();
}

// Show the sorted times array with console.table
console.table(times);
