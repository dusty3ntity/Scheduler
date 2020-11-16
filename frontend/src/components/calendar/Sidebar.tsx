import React from "react";
import { Moment } from "moment";

import PlusIcon from "../common/icons/PlusIcon";
import Button from "../common/inputs/Button";
import SmallCalendar from "./SmallCalendar";

export interface SidebarProps {
	activeDate: Moment;
	onDayClick: (date: Date) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeDate, onDayClick }) => {
	return (
		<div className="sidebar">
			<div className="btn-container">
				<Button className="add-event-btn" icon={<PlusIcon />} text="Create" />
			</div>

			<div className="calendar-container">
				<SmallCalendar activeDate={activeDate} onDayClick={onDayClick} />
			</div>
		</div>
	);
};

export default Sidebar;
