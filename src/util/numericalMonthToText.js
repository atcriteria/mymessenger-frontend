// Takes a numerical date representing the month
// and returns the three letter abbreviation for
// the month. If we somehow got something that isn't
// 1-12, we just default to whatever we were given
export default function numericalMonthToText(numericalMonth){
    switch(numericalMonth){
        case 1:
            return "JAN";
        case 2:
            return "FEB";
        case 3:
            return "MAR";
        case 4:
            return "APR";
        case 5:
            return "MAY";
        case 6:
            return "JUN";
        case 7:
            return "JUL";
        case 8:
            return "AUG";
        case 9:
            return "SEP";
        case 10:
            return "OCT";
        case 11:
            return "NOV";
        case 12:
            return "DEC";
        default:
            return numericalMonth
    }
}