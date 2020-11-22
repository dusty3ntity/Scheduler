import React from "react";
import moment from "moment";

import { hours } from "../../../../models/time";
import { HOUR_CELL_HIGHT } from "../../../../constants/calendar";
import { Highlighter } from "./Highlighter";

export interface TimesColumnProps {
	isHighlighterVisible: boolean;
}

export const TimesColumn: React.FC<TimesColumnProps> = ({ isHighlighterVisible }) => (
	<div className="times-col">
		{isHighlighterVisible && <Highlighter time={moment()} />}

		{hours.map((hour: number) => (
			<span style={{ minHeight: HOUR_CELL_HIGHT }} key={hour}>{`${hour}:00`}</span>
		))}
	</div>
);
