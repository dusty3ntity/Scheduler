import React, { ReactNode } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { HomePage } from "../Home/HomePage";
import { NotFoundPage } from "../NotFound/NotFoundPage";
import { CalendarPage } from "../Calendar/CalendarPage";
import { CreateEventPage } from "../Events/CreateEventPage";

export const App: React.FC = (): JSX.Element => (
	<>
		<Route exact path="/">
			<HomePage />
		</Route>

		<Route
			path={"/(.+)"}
			render={(): ReactNode => (
				<Switch>
					<Route exact path="/calendar">
						<CalendarPage />
					</Route>

					<Route exact path="/create-event">
						<CreateEventPage />
					</Route>

					<Route exact path="/not-found">
						<NotFoundPage />
					</Route>

					<Route>
						<Redirect to="/not-found" />
					</Route>
				</Switch>
			)}
		/>
	</>
);
