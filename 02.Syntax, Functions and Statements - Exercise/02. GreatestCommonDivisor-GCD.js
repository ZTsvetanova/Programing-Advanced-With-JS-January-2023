function greatest(a, b) {

    let gcd = 0;
    let first = 0;
    let second = 0;

    if (a >= b) {
        first = a;
        second = b;
    } else {
        first = b;
        second = a;
    }

    for (let i = 1; i <= second; i++) {
        if ((first % i === 0) && (second % i === 0)) {
            gcd = i;
        }
    }
    console.log(gcd);
}

greatest(15, 5)
greatest(2154, 458)