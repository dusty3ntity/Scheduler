import React from "react";

import PlusIcon from "../common/icons/PlusIcon";
import Button from "../common/inputs/Button";
import SmallCalendar from "./SmallCalendar";

export interface SidebarProps {
	defaultDay: Date;
	onClickDate: (date: Date) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ defaultDay, onClickDate }) => {
	return (
		<div className="sidebar">
			<div className="btn-container">
				<Button className="add-event-btn" icon={<PlusIcon />} text="Create" />
			</div>

			<div className="calendar-container">
				<SmallCalendar day={defaultDay} onClickDate={onClickDate} />
			</div>
		</div>
	);
};

export default Sidebar;
