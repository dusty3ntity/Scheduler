import React from "react";
import { Route, Switch } from "react-router-dom";

import { HomePage } from "../Home/HomePage";
import { CalendarPage } from "../Calendar/CalendarPage";
import { CreateEventPage } from "../Events/CreateEventPage";
import { EventsProvider } from "../../contexts/EventsContext";
import { TimeProvider } from "../../contexts/TimeContext";

export const App: React.FC = () => (
	<EventsProvider>
		<TimeProvider>
			<Switch>
				<Route path="/calendar" component={CalendarPage} />
				<Route path="/create-event" component={CreateEventPage} />
				<Route path="/" component={HomePage} />
			</Switch>
		</TimeProvider>
	</EventsProvider>
);
