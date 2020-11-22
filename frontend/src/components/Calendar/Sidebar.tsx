import React from "react";
import { Moment } from "moment";
import { Link } from "react-router-dom";

import { PlusIcon } from "../Common/Icons/PlusIcon";
import { SmallCalendar } from "../Common/SmallCalendar";

export interface SidebarProps {
	activeDate: Moment;
	onDayClick: (date: Date) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeDate, onDayClick }) => (
	<div className="sidebar">
		<div className="btn-container">
			<Link to="/create-event" className="btn add-event-btn">
				<PlusIcon />
				<span>Create</span>
			</Link>
		</div>

		<div className="calendar-container">
			<SmallCalendar activeDate={activeDate} onDayClick={onDayClick} />
		</div>
	</div>
);