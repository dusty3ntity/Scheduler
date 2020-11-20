export const isTimeValid = (time: String) => {
    if(time.match("^(([01]?[0-9])|([2]?[0-4]))[:][0-5][0-9]") && time.length <=5){
        return true;
    }
    return false;
};
