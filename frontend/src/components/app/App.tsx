import React, { ReactNode } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import HomePage from "../home/HomePage";
import NotFoundPage from "../not-found/NotFoundPage";
import CalendarPage from "../calendar/CalendarPage";

const App: React.FC = () => {
	return (
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