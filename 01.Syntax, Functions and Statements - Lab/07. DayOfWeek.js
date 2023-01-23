function dayOfWeek(word) {

    let day = '';
    switch (word) {
        case 'Monday':
            day = Number(1);
            break;
        case 'Tuesday':
            day = Number(2);
            break;
        case 'Wednesday':
            day = Number(3);
            break;
        case 'Thursday':
            day = Number(4);
            break;
        case 'Friday':
            day = Number(5);
            break;
        case 'Saturday':
            day = Number(6);
            break;
        case 'Sunday':
            day = Number(7);
            break;

        default:
            day = 'error'
            break;
    }
    //console.log(day);
    return day;

}
dayOfWeek('Monday');
dayOfWeek('Friday');
dayOfWeek('Invalid');