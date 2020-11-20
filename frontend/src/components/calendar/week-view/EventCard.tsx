import React, { useEffect, useRef } from "react";
import moment from "moment";

import { Event } from "../../../models/events";
import { getDayEventStyles } from "../../../utils/calendar";

export interface EventCardProps {
	event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
	const timeInterval = `${moment(event.startDate).format("HH:mm")} – ${moment(event.endDate).format("HH:mm")}`;
	const eventCardRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClick = (e: MouseEvent): void => {
			const target = e.target as HTMLDivElement;
			if (eventCardRef.current && eventCardRef.current.contains(target)) {
				e.stopImmediatePropagation();
				console.log(event);
			}
		};
		document.addEventListener("mousedown", handleClick);
		return (): void => {
			document.removeEventListener("mousedown", handleClick);
		};
	});

	return (
		<div
			className="event-card"
			style={getDayEventStyles(event)}
			key={event.startDate.toString()}
			ref={eventCardRef}
		>
			<span className="title">{event.title}</span>
			<span className="time-interval">{timeInterval}</span>
		</div>
	);
};

export default EventCard;
