function previous(year, month, day){

    let now = new Date();
    
    now.setMonth(month-1);
    now.setFullYear(year);
    now.setDate(day-1);
    console.log(`${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`);
}

previous(2016, 9, 1)
previous(2015, 5, 10)