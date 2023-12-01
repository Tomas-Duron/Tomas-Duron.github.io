window.addEventListener("load", (event) => {startTime()});

function startTime(){
    const today = new Date();
    let ampm = "";
    let h = today.getHours();
    if(h>12){
        h -= 12;
        ampm = "PM"
    } else {
        ampm = "AM"
    }
    let m = today.getMinutes();
    document.getElementById('taskbar-clock').innerHTML = h + ":" + m + " " + ampm;
    setTimeout(startTime, 1000);
}