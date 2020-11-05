import moment, { Moment } from "moment";

import { Day, Event } from "./../../models/events";

export const combineDatesWithEvents = (dates: Moment[], events: Event[]): Day[] => {
	const result: Day[] = [];

	for (const date of dates) {
		const dayEvents: Event[] = [];

		for (const event of events) {
			if (moment(event.startDate).isSame(date, "day")) {
				dayEvents.push(event);
			}
		}

		const day: Day = {
			date: date.toDate(),
			events: dayEvents,
		};

		result.push(day);
	}

	return result;
};
