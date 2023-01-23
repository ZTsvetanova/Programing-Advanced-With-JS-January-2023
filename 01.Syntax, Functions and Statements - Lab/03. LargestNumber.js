function largest(first, second, last){

    let largest;

    if(first>second && first>last){
        largest = first;
    }else if(second>first && second>last){
        largest = second;
    }else{
        largest = last;
    }
    console.log(`The largest number is ${largest}.`);

}

largest(5, -3, 16);
largest(-3, -5, -22.5);