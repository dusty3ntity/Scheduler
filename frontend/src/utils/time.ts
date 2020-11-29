import moment, { Moment } from "moment";

import { Locale } from "./../models/locales";
import { times } from "./../models/time";

export const getDaysArray = (date: Moment, daysNum: number): Moment[] => {
	const startDate = moment(date).startOf("day");
	const result: Moment[] = [];

	for (let i = 0; i < daysNum; i++) {
		const day = moment(startDate).add(i, "days");
		result.push(day);
	}

	return result;
};

const getDatesIntervalString = (startDate: Moment, endDate: Moment) => {
	if (startDate.isSame(endDate, "month") && startDate.isSame(endDate, "year")) {
		return startDate.format("MMMM y");
	} else if (!startDate.isSame(endDate, "month") && startDate.isSame(endDate, "year")) {
		return `${startDate.format("MMM")} - ${endDate.format("MMM y")}`;
	} else {
		return `${startDate.format("MMM y")} - ${endDate.format("MMM y")}`;
	}
};

export const getWeekViewIntervalString = (date: Moment, locale: Locale): string => {
	const weekStart = moment(date).locale(locale).startOf("isoWeek");
	const weekEnd = moment(date).locale(locale).endOf("isoWeek");

	return getDatesIntervalString(weekStart, weekEnd);
};

export const getThreeDaysViewIntervalString = (date: Moment, locale: Locale): string => {
	return getDatesIntervalString(date.locale(locale), moment(date).locale(locale).add(3, "d"));
};

export const getNextTimeValue = (timeFrom: string): string => {
	return times.find((time) => moment(time, "kk:mm").diff(moment(timeFrom, "kk:mm"), "minutes") > 30) || "23:59";
};

export const getFullDateString = (startDate: Moment, endDate: Moment): string => {
	if (startDate.isSame(endDate, "year")) {
		return `${startDate.format("dddd, MMMM D ⋅ kk:mm")} – ${endDate.format("kk:mm")}`;
	} else {
		return `${startDate.format("dddd, MMMM D YYYY ⋅ kk:mm")} – ${endDate.format("kk:mm")}`;
	}
};
