function even(arr){

    let newArr = [];

    for (let index = 0; index < arr.length; index++) {
        if(index%2!=1){
            newArr.push(arr[index])
        }        
    }

    console.log(newArr.join(' '));

}
even(['20', '30', '40', '50', '60']);
even(['5', '10'])