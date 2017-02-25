function loaded()
{

var futureDate =  new Date("Dec 07 2018 12:40:16 GMT+0600 (BDT)");
var date = new Date();
var presentTime = date.getTime();

var timelapse = futureDate - presentTime;
console.log(timelapse);

var days = timelapse / (3600*1000*24);
console.log(days);
var floor_days = Math.floor(days);
console.log(floor_days);
document.getElementById('date').innerHTML = floor_days;

var hours = (days - floor_days) * 24;
console.log(hours);
var floor_hours = Math.floor(hours);
console.log(floor_hours);
document.getElementById('hour').innerHTML = floor_hours;

var mins = (hours - floor_hours) * 60;
console.log(mins);
var floor_mins = Math.floor(mins);
console.log(floor_mins);
document.getElementById('min').innerHTML = floor_mins;

var sec = (mins - floor_mins) * 60;
console.log(sec);
var floor_sec = Math.floor(sec);
console.log(floor_sec);

(floor_sec < 10 ? document.getElementById('sec').innerHTML = "0" + floor_sec : document.getElementById('sec').innerHTML = floor_sec);


}
setInterval(loaded,1000);