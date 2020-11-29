import React from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { createNotification } from "../../../../utils/components/notification";
import { NotificationType } from "../../../../models/notifications";

import { EventI } from "../../../../models/events";
import { getDayEventStyles } from "../../../../utils/components/calendar";
import { createEventModal } from "../../../../utils/components/modals";
import { useEventsContext } from "../../../../contexts/EventsContext";
import { Events } from "../../../../api/agent";
import { useTranslation } from "react-i18next";

import "./event-card.scss";

export interface EventCardProps {
	event: EventI;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
	const timeInterval = `${moment(event.startDate).format("HH:mm")} – ${moment(event.endDate).format("HH:mm")}`;
	const history = useHistory();
	const { setEvents } = useEventsContext();
	const { t } = useTranslation();

	const onEventUpdate = (): void => {
		history.push(`/calendar/event/${event.id}`);
	};

	const onEventDelete = async (): Promise<void> => {
		await Events.delete(event.id);

		setEvents((events) => [...events.filter((e) => e.id !== event.id)]);
		createNotification(NotificationType.Success, t("event_deleted_notification"));
	};

	const handleCardClick = (e: React.MouseEvent): void => {
		e.stopPropagation();
		createEventModal(event, onEventUpdate, onEventDelete);
	};

	return (
		<div className="event-card" style={getDayEventStyles(event)} onClick={handleCardClick}>
			<span className="title">{event.title}</span>
			<span className="time-interval">{timeInterval}</span>
		</div>
	);
};
