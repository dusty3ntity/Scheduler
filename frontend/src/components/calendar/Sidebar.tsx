import React from "react";

import PlusIcon from "../common/icons/PlusIcon";
import Button from "../common/inputs/Button";
import SmallCalendar from "./SmallCalendar";

const Sidebar: React.FC = () => {
	return (
		<div className="sidebar">
			<div className="btn-container">
				<Button className="add-event-btn" icon={<PlusIcon />} text="Create" />
			</div>

			<div className="calendar-container">
				<SmallCalendar />
			</div>
		</div>
	);
};

export default Sidebar;
