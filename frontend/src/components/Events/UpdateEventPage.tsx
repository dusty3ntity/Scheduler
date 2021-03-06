import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { EventForm } from "./EventForm";
import { EventFormValuesI, EventI } from "../../models/events";
import { useEventsContext } from "../../contexts/EventsContext";
import { Button } from "../Common/Inputs/Button";
import { CrossIcon } from "../Common/Icons/CrossIcon";
import { Events } from "../../api/agent";
import { createNotification } from "../../utils/components/notification";
import { NotificationType } from "../../models/notifications";

import "./event-pages.scss";

export const UpdateEventPage: React.FC = () => {
	const { events, setEvents } = useEventsContext();
	const [submitting, setSubmitting] = useState(false);
	const history = useHistory();
	const { t } = useTranslation();

	const { id } = useParams<{ id: string }>();
	const event = events.find((e) => e.id === id);

	if (!event) {
		history.push("/404");
		return null;
	}

	const onSubmit = async (formEvent: EventFormValuesI): Promise<void> => {
		try {
			setSubmitting(true);
			await Events.update(id, formEvent);

			const editedEvent: EventI = {
				...formEvent,
				id: event.id,
			};

			setEvents((events) => [...events.filter((e) => e.id !== editedEvent.id), editedEvent]);
			history.goBack();
			createNotification(NotificationType.Success, t("event_updated_notification"));
		} catch {
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<div id="update-event-page" className="event-page page">
			<div className="actions-row">
				<Button className="actions-btn" icon={<CrossIcon />} onClick={(): void => history.goBack()} />
			</div>

			<div className="page-content">
				<h1>{t("update_event_page_title")}</h1>

				<EventForm event={event} onSubmit={onSubmit} submitting={submitting} />
			</div>
		</div>
	);
};
