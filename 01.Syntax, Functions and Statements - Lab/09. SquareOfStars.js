function square(number){

    let row = '';

    for (let r = 0; r < number; r++) {    
        for (let c = 0; c < number; c++) {
            row += ' *'           
        }    
        console.log(row);  
        row = '';
    }
   
}
square(7);
square(2);
square(1);