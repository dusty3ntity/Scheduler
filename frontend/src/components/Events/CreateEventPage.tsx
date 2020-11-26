import React, { useState } from "react";
import moment from "moment";
import { useHistory, useLocation } from "react-router-dom";

import { EventForm } from "./EventForm";
import { EventFormValuesI, EventI, NewEventFormValuesI } from "../../models/events";
import { useEventsContext } from "../../contexts/EventsContext";
import { Button } from "../Common/Inputs/Button";
import { CrossIcon } from "../Common/Icons/CrossIcon";
import { Events } from "../../api/agent";

import "./event-pages.scss";

export const CreateEventPage: React.FC = () => {
	const { setEvents } = useEventsContext();
	const [submitting, setSubmitting] = useState(false);
	const history = useHistory();

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
	};

	return (
		<div id="create-event-page" className="event-page page">
			<div className="actions-row">
				<Button className="actions-btn" icon={<CrossIcon />} onClick={(): void => history.goBack()} />
			</div>

			<div className="page-content">
				<h1>New event</h1>

				<EventForm newEventData={newEventData} onSubmit={onSubmit} submitting={submitting} />
			</div>
		</div>
	);
};
