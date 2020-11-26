import React from "react";
import { Moment } from "moment";
import { useHistory } from "react-router-dom";
import moment from "moment";

import { PlusIcon } from "../Common/Icons/PlusIcon";
import { SmallCalendar } from "../Common/SmallCalendar";
import { Button } from "../Common/Inputs/Button";
import { getRoundedMinutes } from "../../utils/components/calendar";

import "./sidebar.scss";

export interface SidebarProps {
	activeDate: Moment;
	onDayClick: (date: Date) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeDate, onDayClick }) => {
	const history = useHistory();

	const handleCreateClick = (): void => {
		const currentTime = moment();
		const timeString = `${currentTime.hours()}:${getRoundedMinutes(currentTime.minutes())}`;
		const date = currentTime.format("DD-MM-YYYY");

		history.push(`/create-event?date=${date}&time=${timeString}`);
	};

	return (
		<div className="sidebar">
			<div className="btn-container">
				<Button className="add-event-btn" icon={<PlusIcon />} text="Create" onClick={handleCreateClick} />
			</div>

			<div className="calendar-container">
				<SmallCalendar onDayClick={onDayClick} />
			</div>
		</div>
	);
};
