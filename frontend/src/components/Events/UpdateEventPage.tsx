import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { EventForm } from "./EventForm";
import { EventFormValuesI, EventI } from "../../models/events";
import { useEventsContext } from "../../contexts/EventsContext";
import { Button } from "../Common/Inputs/Button";
import { CrossIcon } from "../Common/Icons/CrossIcon";
import { Events } from "../../api/agent";

import "./event-pages.scss";

export const UpdateEventPage: React.FC = () => {
	const { events, setEvents } = useEventsContext();
	const [submitting, setSubmitting] = useState(false);
	const history = useHistory();

	const { id } = useParams<{ id: string }>();
	const event = events.find((e) => e.id === id);

	if (!event) {
		history.push("/404");
		return null;
	}

	const onSubmit = async (formEvent: EventFormValuesI): Promise<void> => {
		setSubmitting(true);
		await Events.update(id, formEvent);
		setSubmitting(false);

		const editedEvent: EventI = {
			...formEvent,
			id: event.id,
		};

		setEvents((events) => [...events.filter((e) => e.id !== editedEvent.id), editedEvent]);
		history.goBack();
	};

	return (
		<div id="update-event-page" className="event-page page">
			<div className="actions-row">
				<Button className="actions-btn" icon={<CrossIcon />} onClick={(): void => history.goBack()} />
			</div>

			<div className="page-content">
				<h1>Update event</h1>

				<EventForm event={event} onSubmit={onSubmit} submitting={submitting} />
			</div>
		</div>
	);
};
