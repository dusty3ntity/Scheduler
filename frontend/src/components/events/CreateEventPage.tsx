import React from "react";
import moment from "moment";

import EventForm from "./EventForm";
import { Event, NewEventFormValues } from "../../models/events";

const CreateEventPage: React.FC = () => {
	const onSubmit = (event: Event): void => {
		console.log("New event:", event);
	};

	const newEventData: NewEventFormValues = {
		date: moment(),
		timeFrom: "23:38",
	};

	return (
		<div id="create-event-page" className="page">
			<h1>New event</h1>

			<EventForm newEventData={newEventData} onSubmit={onSubmit} />
		</div>
	);
};

export default CreateEventPage;
