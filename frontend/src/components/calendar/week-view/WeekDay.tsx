import React from "react";

import { Day, Event } from "../../../models/events";
import EventCard from "./EventCard";

export interface WeekDayProps {
	day: Day;
}

const WeekDay: React.FC<WeekDayProps> = ({ day }) => {
	return (
		<div className="week-day">
			{day.events.map((event: Event) => (
				<EventCard key={event.title} event={event} />
			))}
		</div>
	);
};

export default WeekDay;
