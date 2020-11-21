import React from "react";
import moment from "moment";
import {useLocation} from "react-router-dom";

import {EventForm} from "./EventForm";
import {Event, NewEventFormValues} from "../../models/events";

export const CreateEventPage: React.FC = () => {
	const onSubmit = (event: Event): void => {
		console.log("New event:", event);
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

			<EventForm newEventData={newEventData} onSubmit={onSubmit}/>
		</div>
	);
};
