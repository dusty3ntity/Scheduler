import moment, { Moment } from "moment";

import { times } from "./../models/time";

export const getAllDaysInWeek = (date: Moment): Moment[] => {
	const weekStart = moment(date).startOf("isoWeek").startOf("day");
	const result: Moment[] = [];

	for (let i = 0; i < 7; i++) {
		const weekDay = moment(weekStart).add(i, "days");
		result.push(weekDay);
	}

	return result;
};

export const getMonthIntervalString = (date: Moment): string => {
	const weekStart = moment(date).startOf("isoWeek");
	const weekEnd = moment(date).endOf("isoWeek");

	if (weekStart.get("month") === weekEnd.get("month") && weekStart.get("year") === weekEnd.get("year")) {
		return weekStart.format("MMMM y");
	} else if (weekStart.get("month") !== weekEnd.get("month") && weekStart.get("year") === weekEnd.get("year")) {
		return `${weekStart.format("MMM")} - ${weekEnd.format("MMM y")}`;
	} else {
		return `${weekStart.format("MMM y")} - ${weekEnd.format("MMM y")}`;
	}
};

export const getNextTimeValue = (timeFrom: string): string => {
	return times.find((time) => moment(time, "HH:mm").diff(moment(timeFrom, "HH:mm"), "minutes") > 30) || "23:59";
};

export const getFullDateString = (startDate: Moment, endDate: Moment): string => {
	if (startDate.isSame(endDate, "year")) {
		return `${startDate.format("dddd, MMMM D ⋅ HH:mm")} – ${endDate.format("HH:mm")}`;
	} else {
		return `${startDate.format("dddd, MMMM D YYYY ⋅ HH:mm")} – ${endDate.format("HH:mm")}`;
	}
};
