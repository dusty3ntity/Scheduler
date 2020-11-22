import React, {createContext, useState} from "react";

import {testEvents} from "../__mocks__/events";
import {Event} from "../models/events";

interface EventsContextValue {
    events: Event[];
    addEvent: (event: Event) => void;
}
export const EventsContext = createContext({} as EventsContextValue);
export const EventsProvider: React.FC = ({children}) => {
	const [events, setEvents] = useState<Event[]>(testEvents);
	const addEvent = (event: Event) => {
		setEvents([...events, event]);
	};
	const value = {events, addEvent};
	return <EventsContext.Provider value={value}>{children}</EventsContext.Provider>;
};