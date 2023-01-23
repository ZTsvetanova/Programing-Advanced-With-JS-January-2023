function circle(arg){

    let type = typeof(arg);
    let result;
    //console.log(type);
    if(type === 'number'){
        result = Math.pow(arg, 2)*Math.PI;
        console.log(result.toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}

circle(5);
circle('name')