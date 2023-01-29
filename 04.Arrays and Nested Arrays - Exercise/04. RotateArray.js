function rotate(arr, count){

    let el = '';

    for (let index = 0; index < count; index++) {
        el = arr.pop();
        arr.unshift(el);       
    }
    console.log(arr.join(' '));

}
rotate(['Banana', 'Orange', 'Coconut', 'Apple'], 15)