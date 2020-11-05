import moment from "moment";

import { Day } from "./../../models/time";

export const getAllDaysInWeek = (currentDate = moment()): Day[] => {
	const weekStart = moment(currentDate).startOf("isoWeek").set("minutes", 0).set("seconds", 0);
	const result: Day[] = [];

	for (let i = 0; i < 7; i++) {
		const weekDay = moment(weekStart).add(i, "days");

		const day: Day = {
			name: weekDay.format("ddd"),
			index: weekDay.date(),
		};

		result.push(day);
	}

	return result;
};

export const getMonthIntervalString = (currentDate = moment()): string => {
	const weekStart = moment(currentDate).startOf("isoWeek");
	const weekEnd = moment(currentDate).endOf("isoWeek");

	if (weekStart.get("month") === weekEnd.get("month")) {
		return weekStart.format("MMMM y");
	}

	return `${weekStart.format("MMM")} - ${weekEnd.format("MMM y")}`;
};
