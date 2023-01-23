function sameNumbers(number) {

    let arr = String(number).split('');
    let answer = true;
    let sum = 0;


    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
        if (arr[i + 1]) {
            if (!(arr[i] === arr[i + 1])) {
                answer = false;
            }
        }
    }
    console.log(answer);
    console.log(sum);

}
sameNumbers(2222222);
sameNumbers(1234)