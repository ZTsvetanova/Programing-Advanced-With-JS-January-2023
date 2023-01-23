function dayOfMounth(mounth, year){

    let now = new Date();
    
    now.setMonth(mounth);
    now.setFullYear(year);
    now.setDate(0);
    //console.log(now.getDate());
    return now.getDate();

}
dayOfMounth(1, 2012);
dayOfMounth(2, 2021);
