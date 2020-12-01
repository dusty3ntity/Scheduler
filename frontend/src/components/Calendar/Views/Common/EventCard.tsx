import React from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { createNotification } from "../../../../utils/components/notification";
import { NotificationType } from "../../../../models/notifications";
import { useTranslation } from "react-i18next";

import { EventI } from "../../../../models/events";
import { getDayEventStyles } from "../../../../utils/components/calendar";
import { createEventModal } from "../../../../utils/components/modals";
import { useEventsContext } from "../../../../contexts/EventsContext";
import { Events } from "../../../../api/agent";

import "./event-card.scss";
import { getEventDuration } from "../../../../utils/events";

export interface EventCardProps {
	event: EventI;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
	const history = useHistory();
	const { setEvents } = useEventsContext();
	const { t } = useTranslation();

	const onEventUpdate = (): void => {
		history.push(`/calendar/event/${event.id}`);
	};

	const onEventDelete = async (): Promise<void> => {
		try {
			await Events.delete(event.id);

			setEvents((events) => [...events.filter((e) => e.id !== event.id)]);
			createNotification(NotificationType.Success, t("event_deleted_notification"));
		} catch {}
	};

	const handleCardClick = (e: React.MouseEvent): void => {
		e.stopPropagation();
		createEventModal(event, onEventUpdate, onEventDelete);
	};

	const timeInterval = `${moment(event.startDate).format("HH:mm")} – ${moment(event.endDate).format("kk:mm")}`;
	const eventDuration = getEventDuration(event);

	return (
		<div className="event-card" style={getDayEventStyles(event)} onClick={handleCardClick}>
			<span className="title">{event.title}</span>
			{eventDuration > 50 && <span className="time-interval">{timeInterval}</span>}
		</div>
	);
};
