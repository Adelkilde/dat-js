console.log("app.js is running 🎉");

const times = [
    {
        disciplin: "butterfly",
        resultTime: "13:50:00",
        uid: "LWPSKpRvx7Htyjlb8JqV"
    },
    {
        disciplin: "butterfly",
        resultTime: "11:02:03",
        uid: "ie2gUpGcsSfd4mBwLxtY"
    },
    {
        disciplin: "butterfly",
        resultTime: "01:02:05",
        uid: "ie2gUpGcsSfd4mBwLxtY"
    },
    {
        disciplin: "butterfly",
        resultTime: "09:02:30",
        uid: "LWPSKpRvx7Htyjlb8JqV"
    }
];

console.table(times);

times.sort(compareTime);

function compareTime(time1, time2) {
    const timeDate1 = new Date("2023-05-24T" + time1.resultTime);
    const timeDate2 = new Date("2023-05-24T" + time2.resultTime);

    return timeDate1.getTime() - timeDate2.getTime();
}

console.table(times);
