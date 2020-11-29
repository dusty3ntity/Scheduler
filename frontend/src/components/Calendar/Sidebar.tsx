import React from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { useTranslation } from "react-i18next";

import { PlusIcon } from "../Common/Icons/PlusIcon";
import { SmallCalendar } from "../Common/SmallCalendar";
import { Button } from "../Common/Inputs/Button";
import { getRoundedMinutes } from "../../utils/components/calendar";
import { combineClassNames } from "../../utils/components/classNames";

import "./sidebar.scss";

export interface SidebarProps {
	onDayClick: (date: Date) => void;
	isOpen: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ onDayClick, isOpen }) => {
	const history = useHistory();
	const { t } = useTranslation();

	const handleCreateClick = (): void => {
		const currentTime = moment();
		const timeString = `${currentTime.hours()}:${getRoundedMinutes(currentTime.minutes())}`;
		const date = currentTime.format("DD-MM-YYYY");

		history.push(`/create-event?date=${date}&time=${timeString}`);
	};

	return (
		<div className={combineClassNames("sidebar", { collapsed: !isOpen })}>
			<div className="btn-container">
				<Button
					className="add-event-btn"
					icon={<PlusIcon />}
					text={t("sidebar_create_event_button")}
					onClick={handleCreateClick}
				/>
			</div>

			<div className="calendar-container">
				<SmallCalendar onDayClick={onDayClick} />
			</div>
		</div>
	);
};
