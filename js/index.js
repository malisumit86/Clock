setInterval(function() {
    var date = new Date();

    updateClock(date);
    updateTime(date);
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