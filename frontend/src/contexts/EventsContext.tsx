import React, { createContext, useContext, useEffect, useState } from "react";

import { EventI } from "../models/events";
import { Events } from "../api/agent";

interface EventsContextValue {
	events: EventI[];
	setEvents: React.Dispatch<React.SetStateAction<EventI[]>>;
	loading: boolean;
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
	const [events, setEvents] = useState<EventI[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getEvents = async (): Promise<void> => {
			try {
				setLoading(true);
				const events = await Events.list();
				setEvents(events);
			} catch {
			} finally {
				setLoading(false);
			}
		};

		getEvents();
	}, []);

	const value = { events, setEvents, loading };

	return <EventsContext.Provider value={value}>{children}</EventsContext.Provider>;
};
