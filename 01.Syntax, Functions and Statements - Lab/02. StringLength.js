function length(first, second, last){

    let sumLength = first.length + second.length + last.length;
    let averageLength = Math.floor(sumLength/3);

    console.log(sumLength);
    console.log(averageLength);

}
length('chocolate', 'ice cream', 'cake')
length('pasta', '5', '22.3')