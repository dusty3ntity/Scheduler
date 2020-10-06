import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import CalendarPage from "../../components/calendar/CalendarPage";

const App = () => {
	return (
		<>
			<Route exact path="/">
				<HomePage />
			</Route>

			<Route
				path={"/(.+)"}
				render={() => (
					<Switch>
						<Route exact path="/calendar">
							<CalendarPage />
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
};

export default App;
