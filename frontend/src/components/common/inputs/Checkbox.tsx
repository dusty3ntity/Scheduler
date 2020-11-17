import React from "react";

import { ComponentProps } from "../../../models/components";
import { combineClassNames } from "../../../utils/classNames";
import CheckIcon from "../icons/CheckIcon";

export interface CheckboxProps extends ComponentProps {
	checked?: boolean;
	onChange?: (value: boolean) => void;
	disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, className, checked, onChange, disabled, children, ...props }) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		if (onChange) {
			onChange(e.target.checked);
		}
	};

	return (
		<label
			id={id}
			className={combineClassNames("checkbox-wrapper", className)}
			{...props}
			onClick={(e): void => e.stopPropagation()}
		>
			<input type="checkbox" checked={checked} disabled={disabled} onChange={handleChange} />
			<span className="checkbox">
				<CheckIcon className="check" />
			</span>

			<span className="checkbox-content">{children}</span>
		</label>
	);
};

export default Checkbox;
