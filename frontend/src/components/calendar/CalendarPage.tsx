import React from "react";
import Sidebar from "./Sidebar";
import TopPanel from "./TopPanel";

const CalendarPage: React.FC = () => {
	return (
		<div id="calendar-page" className="page">
			<TopPanel />

			<div className="page-content">
				<Sidebar />
			</div>
		</div>
	);
};

export default CalendarPage;
