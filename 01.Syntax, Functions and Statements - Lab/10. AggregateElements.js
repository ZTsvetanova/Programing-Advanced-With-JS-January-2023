function aggregateElements(arr) {

    let sum = 0;
    let inverseValues = 0;
    let concat = '';

    for (const n of arr) {
        sum += n;
        inverseValues += 1 / n;
        concat += n.toString();
    }
    console.log(sum);
    console.log(inverseValues);
    console.log(concat);

}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);