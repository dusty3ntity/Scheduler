import React, { useContext } from "react";
import moment from "moment";
import { useLocation, useHistory } from "react-router-dom";

import { EventForm } from "./EventForm";
import { Event, NewEventFormValues } from "../../models/events";
import { EventsContext } from "../../contexts/EventsContext";

export const CreateEventPage: React.FC = () => {
	const { addEvent } = useContext(EventsContext);
	const history = useHistory();
	
	const onSubmit = (event: Event): void => {
		console.log("New event:", event);
		addEvent(event);
		history.goBack();
	};

	const useQuery = (): URLSearchParams => {
		return new URLSearchParams(useLocation().search);
	};

	const query = useQuery();

	const newEventData: NewEventFormValues = {
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
