function timeToWalk(steps, stepsInMeters, speed) {
  let distanceInMetres = steps * stepsInMeters;
  let speedInMetresPerSecond = speed / 3.6;
  let rest = Math.floor(distanceInMetres / 500) * 60;
  let time = distanceInMetres / speedInMetresPerSecond + rest;

  let hours = Math.floor(time / 3600);
  let minutes = Math.floor(time / 60);
  let seconds = Math.round(time % 60);

  console.log(`${hours<10 ? "0" : ""}${hours}:${minutes<10 ? "0" : ""}${minutes}:${seconds<10 ? "0" : ""}${seconds}`);
}
timeToWalk(4000, 0.6, 5);
//00:32:48
timeToWalk(2564, 0.7, 5.5);
//00:22:35
