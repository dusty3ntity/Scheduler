import React from "react";

import { hours } from "../../../../models/time";
import { HOUR_CELL_HIGHT } from "../../../../constants/calendar";
import { Highlighter } from "./Highlighter";
import { useTimeContext } from "../../../../contexts/TimeContext";

export interface TimesColumnProps {
	isHighlighterVisible: boolean;
}

export const TimesColumn: React.FC<TimesColumnProps> = ({ isHighlighterVisible }) => {
	const { currentTime } = useTimeContext();

	return (
		<div className="times-col">
			{isHighlighterVisible && <Highlighter time={currentTime} />}

			{hours.map((hour: number) => (
				<span style={{ minHeight: HOUR_CELL_HIGHT }} key={hour}>{`${hour}:00`}</span>
			))}
		</div>
	);
};
