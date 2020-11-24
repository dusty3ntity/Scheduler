import React from "react";
import { useHistory, useParams } from "react-router-dom";

import { EventForm } from "./EventForm";
import { EventFormValuesI, EventI } from "../../models/events";
import { useEventsContext } from "../../contexts/EventsContext";
import { Button } from "../Common/Inputs/Button";
import { CrossIcon } from "../Common/Icons/CrossIcon";

export const UpdateEventPage: React.FC = () => {
	const { events, setEvents } = useEventsContext();
	const history = useHistory();

	const { id } = useParams<{ id: string }>();
	const event = events.find((e) => e.id === id)!;

	const onSubmit = (formEvent: EventFormValuesI): void => {
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

				<EventForm event={event} onSubmit={onSubmit} />
			</div>
		</div>
	);
};
