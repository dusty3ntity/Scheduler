import React, { createContext, useContext, useEffect, useState } from "react";
import moment, { Moment } from "moment";

import { CURRENT_TIME_UPDATE_INTERVAL } from "../constants/time";

interface TimeContextValue {
	currentTime: Moment;
}

export const TimeContext = createContext<TimeContextValue | undefined>(undefined);

export const useTimeContext = (): TimeContextValue => {
	const c = useContext(TimeContext);

	if (!c) {
		throw new Error("useTimeContext must be inside TimeProvider");
	}

	return c;
};

export const TimeProvider: React.FC = ({ children }) => {
	const [currentTime, setCurrentTime] = useState(moment());

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime(moment());
		}, CURRENT_TIME_UPDATE_INTERVAL);

		return (): void => {
			clearInterval(interval);
		};
	}, []);

	const value = { currentTime };

	return <TimeContext.Provider value={value}>{children}</TimeContext.Provider>;
};
