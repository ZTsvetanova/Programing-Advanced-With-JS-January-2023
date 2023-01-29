function carFactory(obj) {
  let p = 0;
  let v = 0;

  if (obj.power <= 90) {
    p = 90;
    v = 1800;
  } else if (obj.power <= 120) {
    p = 120;
    v = 2400;
  } else if (obj.power <= 200) {
    p = 200;
    v = 3500;
  }
  let engine = {
    power: p,
    volume: v,
  };
  let carriageSpecific = {
    type: obj.carriage,
    color: obj.color,
  };
  
  if(obj.wheelsize % 2 === 0){
    obj.wheelsize -= 1;
  }
  let wheelsArr = [obj.wheelsize, obj.wheelsize, obj.wheelsize, obj.wheelsize];

  let newObj = {
    model: obj.model,
    engine: engine,
    carriage: carriageSpecific,
    wheels : wheelsArr,
  };

  //console.table(newObj);
  return newObj;
}
carFactory({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
});
