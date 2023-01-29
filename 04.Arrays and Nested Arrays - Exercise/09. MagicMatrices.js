function magicMatrix(matrix) {
  let sumRows = 0;
  let sumCols = 0;

  for (let i = 0; i < matrix.length; i++) {
    let newArr = matrix[i].join("");
    for (j = 0; j < newArr.length; j++) {
      sumRows += Number(newArr[j]);
      sumCols += Number(newArr[0]);
    }
  }
  if(sumRows === sumCols){
    console.log(true);
  }else{
    console.log(false);
  }
}
magicMatrix([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
magicMatrix([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
