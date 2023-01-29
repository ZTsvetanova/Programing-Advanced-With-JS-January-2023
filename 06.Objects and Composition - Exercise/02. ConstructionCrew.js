function crew(obj) {
  if (obj.dizziness) {
    let neededWater = obj.weight * obj.experience * 0.1;
    obj.levelOfHydrated += neededWater;
    obj.dizziness = false;
  }

//   if (!obj.dizziness) {
//     console.log(obj);
//   }
return obj;
}
crew({
  weight: 80, //kg

  experience: 1, //years

  levelOfHydrated: 90, //ml

  dizziness: true,
});
