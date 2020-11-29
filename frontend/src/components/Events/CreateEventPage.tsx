import React, { useState } from "react";
import moment from "moment";
import { useHistory, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { EventForm } from "./EventForm";
import { EventFormValuesI, EventI, NewEventFormValuesI } from "../../models/events";
import { useEventsContext } from "../../contexts/EventsContext";
import { Button } from "../Common/Inputs/Button";
import { CrossIcon } from "../Common/Icons/CrossIcon";
import { Events } from "../../api/agent";
import { createNotification } from "../../utils/components/notification";
import { NotificationType } from "../../models/notifications";

import "./event-pages.scss";

export const CreateEventPage: React.FC = () => {
	const { setEvents } = useEventsContext();
	const [submitting, setSubmitting] = useState(false);

	const history = useHistory();
	const { t } = useTranslation();

	const useQuery = (): URLSearchParams => {
		return new URLSearchParams(useLocation().search);
	};

	const query = useQuery();

	const newEventData: NewEventFormValuesI = {
		date: moment(query.get("date"), "DD-MM-YYYY"),
		timeFrom: query.get("time") || "8:00",
	};

	const onSubmit = async (formEvent: EventFormValuesI): Promise<void> => {
		setSubmitting(true);
		const id = await Events.create(formEvent);
		setSubmitting(false);

		const newEvent: EventI = {
			...formEvent,
			id,
		};

		setEvents((events) => [...events, newEvent]);
		history.goBack();

		createNotification(NotificationType.Success, t("event_created_notification"));
	};

	return (
		<div id="create-event-page" className="event-page page">
			<div className="actions-row">
				<Button className="actions-btn" icon={<CrossIcon />} onClick={(): void => history.goBack()} />
			</div>

			<div className="page-content">
				<h1>{t("create_event_page_title")}</h1>

				<EventForm newEventData={newEventData} onSubmit={onSubmit} submitting={submitting} />
			</div>
		</div>
	);
};
