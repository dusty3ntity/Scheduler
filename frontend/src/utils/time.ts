import moment, { Moment } from "moment";

import { times } from "./../models/time";

export const getAllDaysInWeek = (currentDate = moment()): Moment[] => {
	const weekStart = moment(currentDate).startOf("isoWeek").set("minutes", 0).set("seconds", 0);
	const result: Moment[] = [];

	for (let i = 0; i < 7; i++) {
		const weekDay = moment(weekStart).add(i, "days");
		result.push(weekDay);
	}

	return result;
};

export const getMonthIntervalString = (currentDate = moment()): string => {
	const weekStart = moment(currentDate).startOf("isoWeek");
	const weekEnd = moment(currentDate).endOf("isoWeek");

	if (weekStart.get("month") === weekEnd.get("month") && weekStart.get("year") === weekEnd.get("year")) {
		return weekStart.format("MMMM y");
	} else if (weekStart.get("month") !== weekEnd.get("month") && weekStart.get("year") === weekEnd.get("year")) {
		return `${weekStart.format("MMM")} - ${weekEnd.format("MMM y")}`;
	} else {
		return `${weekStart.format("MMM")} ${weekStart.format("y")} - ${weekEnd.format("MMM")} ${weekEnd.format("y")}`;
	}
};

export const getNextTimeValue = (timeFrom: string): string => {
	return times.find((time) => moment(time, "h:mm").diff(moment(timeFrom, "h:mm"), "minutes") > 30) || "23:59";
};
