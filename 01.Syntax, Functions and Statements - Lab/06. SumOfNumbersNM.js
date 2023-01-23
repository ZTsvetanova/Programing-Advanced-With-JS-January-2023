function sumOfNumbers(n, m){

    let first = Number(n);
    let second = Number(m);
    let result = 0;


    for (let i = first; i <=second; i++) {
        result += i;
        
    }
    //console.log(result);
    return result;
 
}

sumOfNumbers('1', '5');
sumOfNumbers('-8', '20')