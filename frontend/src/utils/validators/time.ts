export const isTimeValid = (time: string): boolean => {
	if (
		(time.match("^(([01][0-9])|([2][0-4]))[:][0-5][0-9]") && time.length <= 5) ||
		(time.match("^[0-9][:][0-5][0-9]") && time.length <= 4)
	) {
		return true;
	}
	return false;
};
