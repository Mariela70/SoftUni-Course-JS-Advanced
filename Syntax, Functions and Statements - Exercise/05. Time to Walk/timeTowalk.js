function timeTowalk(steps, footprint, speed) {
let distance = steps*footprint;
let speedMeterSec = speed / 3.6;
let time = distance / speedMeterSec;
let rest = Math.floor(distance / 500);

let timeMin = Math.floor(time /60);
let timeSec = Math.round(time-(timeMin*60));
let timeHr = Math.floor(time /3600);

console.log(
    (timeHr < 10 ? "0" : "") + 
    timeHr +
    ":" + 
    (timeMin + rest <10 ? "0" : "") +
    (timeMin + rest) +
    ":" +
    (timeSec <10 ? "0" : "") + timeSec
)
}
timeTowalk(4000, 0.6, 5);