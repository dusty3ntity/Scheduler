import React from "react";
import moment from "moment";

import { Event } from "../../../app/models/events";
import { getDayEventStyles } from "../../../app/common/util/calendar";

export interface EventCardProps {
	event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
	const timeInterval = `${moment(event.startDate).format("HH:mm")} – ${moment(event.endDate).format("HH:mm")}`;

	return (
		<div className="event-card" style={getDayEventStyles(event)} key={event.startDate.toString()}>
			<span className="title">{event.title}</span>
			<span className="time-interval">{timeInterval}</span>
		</div>
	);
};

export default EventCard;
