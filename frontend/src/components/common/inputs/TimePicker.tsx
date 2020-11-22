/* eslint-disable react/display-name */
import React, { useState } from "react";

import { ComponentProps } from "../../../models/components";
import { combineClassNames } from "../../../utils/classNames";
import { Dropdown } from "../Dropdown";

export interface TimePickerProps extends ComponentProps {
	values: string[];
	onValueClick?: (value: string) => void;

	name?: string;
	value?: string;
	onChange?: (value: string) => void;
}

export const TimePicker = React.forwardRef<HTMLInputElement, TimePickerProps>(
	({ values, onValueClick, name, value, onChange, id, className, ...props }, ref) => {
		const [dropdownExpanded, setDropdownExpanded] = useState(false);

		const handleItemClick = (value: string): void => {
			if (onChange) {
				onChange(value);
			}
			if (onValueClick) {
				onValueClick(value);
			}
			setDropdownExpanded(false);
		};

		const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
			if (onChange) {
				onChange(e.target.value);
			}
		};

		const buttonContent = (
			<input
				className="text-input selected-time"
				autoComplete="off"
				type="text"
				name={name}
				ref={ref}
				value={value}
				onChange={handleInputChange}
			/>
		);

		return (
			<Dropdown
				id={id}
				className={combineClassNames("time-picker", className)}
				buttonContent={buttonContent}
				items={values}
				onItemClick={handleItemClick}
				onOpen={(): void => setDropdownExpanded(true)}
				onClose={(): void => setDropdownExpanded(false)}
				expanded={dropdownExpanded}
				{...props}
			/>
		);
	}
);
