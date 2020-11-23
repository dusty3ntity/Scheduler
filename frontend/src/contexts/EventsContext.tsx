import React, { createContext, useContext, useState } from "react";

import { testEvents } from "../__mocks__/events";
import { EventI } from "../models/events";

interface EventsContextValue {
	events: EventI[];
	setEvents: React.Dispatch<React.SetStateAction<EventI[]>>;
}

export const EventsContext = createContext<EventsContextValue | undefined>(undefined);

export const useEventsContext = (): EventsContextValue => {
	const c = useContext(EventsContext);

	if (!c) {
		throw new Error("useEventContext must be inside EventsProvider");
	}

	return c;
};

export const EventsProvider: React.FC = ({ children }): JSX.Element => {
	const [events, setEvents] = useState<EventI[]>(testEvents);

	const value = { events, setEvents };

	return <EventsContext.Provider value={value}>{children}</EventsContext.Provider>;
};
