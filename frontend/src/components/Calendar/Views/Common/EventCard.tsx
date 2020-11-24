import React from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";

import { EventI } from "../../../../models/events";
import { getDayEventStyles } from "../../../../utils/components/calendar";
import { createEventModal } from "../../../../utils/components/modals";

export interface EventCardProps {
	event: EventI;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
	const timeInterval = `${moment(event.startDate).format("HH:mm")} – ${moment(event.endDate).format("HH:mm")}`;
	const history = useHistory();

	const onEventUpdate = (): void => {
		history.push(`/calendar/event/${event.id}`);
	};

	const handleCardClick = (e: React.MouseEvent): void => {
		e.stopPropagation();
		createEventModal(event, onEventUpdate);
	};

	return (
		<div
			className="event-card"
			style={getDayEventStyles(event)}
			key={event.startDate.toString()}
			onClick={handleCardClick}
		>
			<span className="title">{event.title}</span>
			<span className="time-interval">{timeInterval}</span>
		</div>
	);
};
