function operations(first, second, operator) {

    let result;

    switch (operator) {
        case '+':
            result = first + second;
            break;
        case '-':
            result = first - second;
            break;
        case '*':
            result = first * second;
            break;
        case '/':
            result = first / second;
            break;
        case '%':
            result = first % second;
            break;
        case '**':
            result = first ** second;
            break;

    }
    console.log(result);

}
operations(5, 6, '+');
operations(3, 5.5, '*')