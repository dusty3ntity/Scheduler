import moment, { Moment } from "moment";

import { Day, Event } from "../models/events";

export const combineDatesWithEvents = (dates: Moment[], events: Event[]): Day[] => {
	const result: Day[] = dates.map((date) => ({
		date: date.toDate(),
		events: events.filter((event) => moment(event.startDate).isSame(date, "day")),
	}));

	return result;
};
