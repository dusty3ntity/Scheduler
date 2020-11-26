import React from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";

import { DayI, EventI } from "../../../../models/events";
import { EventCard } from "./EventCard";
import { getTimeStringByOffset } from "../../../../utils/components/calendar";

export interface WeekDayProps {
	day: DayI;
}

export const WeekDay: React.FC<WeekDayProps> = ({ day }) => {
	const history = useHistory();

	const handleClick = (e: React.MouseEvent): void => {
		const target = e.target as HTMLDivElement;
		const offset = e.clientY - target.getBoundingClientRect().top;

		const time = getTimeStringByOffset(offset);
		const date = moment(day.date).format("DD-MM-YYYY");

		history.push(`/create-event?date=${date}&time=${time}`);
	};

	return (
		<div className="week-day" onClick={handleClick}>
			{day.events.map((event: EventI) => (
				<EventCard key={event.id} event={event} />
			))}
		</div>
	);
};
