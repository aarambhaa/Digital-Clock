
let a;
let newDate;
let time;


const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function setTime() {

a = new Date();
newDate = a.toLocaleDateString(undefined, options); 
time = a.getHours() + ':' + a.getMinutes() + ':' +  a.getSeconds();

if (a.getSeconds() < 10) {
    time = a.getHours() + ':' + a.getMinutes() + ':' + '0' + a.getSeconds();
    document.getElementById('time-and-date').innerHTML = "The current time is " + 
    time + " on " + newDate;
} else {
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds(); 
    document.getElementById('time-and-date').innerHTML = "The current time is " + 
    time + " on " + newDate
}
}

setInterval(setTime, 1000);