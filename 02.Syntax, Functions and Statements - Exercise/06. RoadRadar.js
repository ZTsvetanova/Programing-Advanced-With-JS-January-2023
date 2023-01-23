function roadRadar(speed, area) {

  let speedLimit = 0;
   
  //⦁	On the motorway, the limit is 130 km/h
  //⦁	On the interstate, the limit is 90 km/h
  //⦁	In the city, the limit is 50 km/h
  //⦁	Within a residential area, the limit is 20 km/h
  switch (area) {
    case "motorway":
      speedLimit = 130;
      break;
    case "interstate":
      speedLimit = 90;
      break;
    case "city":
      speedLimit = 50;
      break;
    case "residential":
      speedLimit = 20;
      break;
  }
  let speedDifference = speedLimit - speed;
  let status = "";
 if(speedDifference<0) {
  if(Math.abs(speedDifference)<=20){
    status = "speeding"
  }else if(Math.abs(speedDifference)<=40){
    status = "excessive speeding"
  }else{
    status = "reckless driving"
  }
 }
  //For speeding up to 20 km/h over the limit, the status should be speeding.
  //For speeding up to 40 km/h over the limit, the status should be excessive speeding.
  //For anything else, status should be reckless driving.
  if (speedDifference >= 0) {
    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
  }else{
    console.log(`The speed is ${Math.abs(speedDifference)} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
  }
}
roadRadar(40, "city");
//Driving 40 km/h in a 50 zone
roadRadar(21, "residential");
//The speed is 1 km/h faster than the allowed speed of 20 - speeding
roadRadar(120, "interstate");
//The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding
roadRadar(200, "motorway");
//The speed is 70 km/h faster than the allowed speed of 130 - reckless driving
