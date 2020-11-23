import moment from "moment";

export const getIsTimeValid = (time: string): boolean => {
	if (
		(time.match("^(([01][0-9])|([2][0-4]))[:][0-5][0-9]") && time.length <= 5) ||
		(time.match("^[0-9][:][0-5][0-9]") && time.length <= 4)
	) {
		return true;
	}
	return false;
};

export const getIsTimeFromBeforeTimeTo = (timeFrom: string, timeTo: string): boolean => {
	return moment(timeFrom, "h:mm").isBefore(moment(timeTo, "h:mm"));
};
