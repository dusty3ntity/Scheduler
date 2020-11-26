import React from "react";
import { Route, Router, Switch } from "react-router-dom";

import { HomePage } from "../Home/HomePage";
import { CalendarPage } from "../Calendar/CalendarPage";
import { CreateEventPage } from "../Events/CreateEventPage";
import { EventsProvider } from "../../contexts/EventsContext";
import { TimeProvider } from "../../contexts/TimeContext";
import { history } from "../../config/history";
import { UpdateEventPage } from "../Events/UpdateEventPage";
import { NotificationContainer } from "../Common/Notifications/NotificationContainer";

export const App: React.FC = () => (
	<Router history={history}>
		<NotificationContainer />

		<EventsProvider>
			<TimeProvider>
				<Switch>
					<Route exact path="/calendar" component={CalendarPage} />
					<Route path="/create-event" component={CreateEventPage} />
					<Route path="/calendar/event/:id" component={UpdateEventPage} />
					<Route path="/" component={HomePage} />
				</Switch>
			</TimeProvider>
		</EventsProvider>
	</Router>
);
