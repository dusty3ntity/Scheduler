import moment, { Moment } from "moment";

import { DayI, EventI } from "../models/events";

export const combineDatesWithEvents = (dates: Moment[], events: EventI[]): DayI[] => {
	const result: DayI[] = dates.map((date) => ({
		date: date.toDate(),
		events: events.filter((event) => moment(event.startDate).isSame(date, "day")),
	}));

	return result;
};
