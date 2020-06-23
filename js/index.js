setInterval(function() {
    var date = new Date();
    updateTime(date);
    updateClock(date);

    getday(date);

}, 1000);

function updateTime(date) {
    var t = document.getElementById("r1");
    t.innerHTML = "Digitally Reference :- " + date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
}

function updateClock(date) {

    var secHand = document.getElementById("sec-hand").style;
    var min = document.getElementById("min-hand").style;
    var hrs = document.getElementById("hr-hand").style;

    secHand.transform = "rotate(" + date.getSeconds() * 6 + "deg)";
    min.transform = "rotate(" + date.getMinutes() * 6 + "deg)";
    hrs.transform = "rotate(" + (date.getHours() * 30 + date.getMinutes() * 0.5) + "deg)";
}

function getday(date) {
    var d = document.getElementById("day");
    var tarikh = document.getElementById("date");
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[date.getDay()];
    d.innerHTML = n;
    var mon = date.getMonth() + 1;

    tarikh.innerHTML = date.getDate() + "/" + mon + "/" + date.getFullYear();


}