function renderTime() {
    let mydate = new Date();
    let year = mydate.getFullYear();
    if (year < 1000) {
        year += 1900
    }
    let day = mydate.getDay();
    let month = mydate.getMonth();
    let daym = mydate.getDate();
    let dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    let montharray = new Array("January", "February", "Mars", "April", "May", "June", "July", "August", "September", "October", "November", "December")

    let currentTime = new Date();
    let h = currentTime.getHours();
    let m = currentTime.getMinutes();
    let s = currentTime.getSeconds();
    if (h == 24) {
        h = 0;
    } else if (h > 12) {
        h = h - 0;
    }
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    let myClock = document.getElementById("clockDisplay");
    myClock.textContent = "" + dayarray[day] + " " + daym + " " + montharray[month] + " " + year + " | " + h + ":" + m + ":" + s;
    myClock.innerText = "" + dayarray[day] + " " + daym + " " + montharray[month] + " " + year + " | " + h + ":" + m + ":" + s;

    setTimeout("renderTime()", 1000);
}
renderTime();