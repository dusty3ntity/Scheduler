import React from "react";
import moment from "moment";
import { useLocation, useHistory } from "react-router-dom";

import { EventForm } from "./EventForm";
import { EventI, NewEventFormValuesI } from "../../models/events";
import { useEventsContext } from "../../contexts/EventsContext";

export const CreateEventPage: React.FC = () => {
	const { events, setEvents } = useEventsContext();
	const history = useHistory();

	const onSubmit = (event: EventI): void => {
		console.log("New event:", event);
		setEvents([...events, event]);
		history.goBack();
	};

	const useQuery = (): URLSearchParams => {
		return new URLSearchParams(useLocation().search);
	};

	const query = useQuery();

	const newEventData: NewEventFormValuesI = {
		date: moment(query.get("date"), "DD-MM-YYYY"),
		timeFrom: query.get("time") || "8:00",
	};

	return (
		<div id="create-event-page" className="page">
			<h1>New event</h1>

			<EventForm newEventData={newEventData} onSubmit={onSubmit} />
		</div>
	);
};
