function cook(...arr) {
  let num = arr.shift();

  const funcShelft = {
    chop() {
      num /= 2;
    },
    dice() {
      num = Math.sqrt(num);
    },
    spice() {
      num += 1;
    },
    bake() {
      num *= 3;
    },
    fillet() {
      num -= (num*0.2);
    },
  };

  arr.forEach((command) => {
    funcShelft[command](), console.log(num);
  });

}
cook("32", "chop", "chop", "chop", "chop", "chop");
cook("9", "dice", "spice", "chop", "bake", "fillet");
