/* eslint-disable react/display-name */
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";

import { ComponentProps } from "../../../models/components";
import { combineClassNames } from "../../../utils/components/classNames";
import { SmallCalendar } from "../SmallCalendar";

import "./date-picker.scss";

export interface DatePickerProps extends ComponentProps {
	date?: Date;

	name: string;
	value?: string;
	defaultValue?: Date;
	onChange?: (value: Date) => void;
}

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
	({ date, name, value, defaultValue, onChange, id, className, ...props }, ref) => {
		const [calendarExpanded, setCalendarExpanded] = useState(false);

		const buttonRef = useRef<HTMLDivElement>(null);
		const menuRef = useRef<HTMLDivElement>(null);

		useEffect(() => {
			const handleClickOutside = (e: MouseEvent): void => {
				const target = e.target as HTMLElement;
				if (
					menuRef.current &&
					buttonRef.current &&
					!menuRef.current.contains(target) &&
					!buttonRef.current.contains(target)
				) {
					setCalendarExpanded(false);
				}
			};
			document.addEventListener("mousedown", handleClickOutside);

			return (): void => {
				document.removeEventListener("mousedown", handleClickOutside);
			};
		}, []);

		const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
			if (onChange) {
				onChange(new Date(e.target.value));
			}
		};

		return (
			<div
				id={id}
				className={combineClassNames("date-picker", className, {
					"date-picker-open": calendarExpanded,
					"date-picker-closed": !calendarExpanded,
				})}
				{...props}
			>
				<div className="date-picker-button btn" ref={buttonRef} onClick={(): void => setCalendarExpanded(true)}>
					<input
						className="date-input"
						autoComplete="off"
						type="text"
						name={name}
						ref={ref}
						value={value}
						onChange={handleInputChange}
					/>

					<div className="button-content-wrapper">{moment(value).format("D MMMM y")}</div>
				</div>

				<div className="date-picker-menu" ref={menuRef}>
					<SmallCalendar
						defaultValue={moment(value).toDate()}
						onDayClick={(date): void => {
							if (onChange) {
								onChange(date);
							}
							setCalendarExpanded(false);
						}}
					/>
				</div>
			</div>
		);
	}
);
