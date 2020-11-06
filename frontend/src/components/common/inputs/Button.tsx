import React, { ReactNode } from "react";

import { ComponentProps } from "../../../models/components";
import { combineClassNames } from "../../../utils/classNames";

export interface ButtonProps extends ComponentProps {
	type?: "button" | "submit" | "reset";
	icon?: ReactNode;
	text?: string;
	textClassName?: string;

	active?: boolean;
	disabled?: boolean;
	onClick?: () => void;

	noDisabledStyles?: boolean;
	rightIcon?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	id,
	className,

	type = "button",
	icon,
	text,
	textClassName,

	active,
	disabled,
	onClick,

	noDisabledStyles,
	rightIcon,

	children,
	...props
}) => {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		if (!onClick) {
			return undefined;
		}

		e.stopPropagation();
		onClick();
	};

	return (
		<button
			id={id}
			className={combineClassNames("btn", className, {
				round: icon && !text,
				active: active,
				"no-disabled-styles": noDisabledStyles,
			})}
			type={type}
			disabled={disabled}
			onClick={handleClick}
			{...props}
		>
			{icon}
			{text && <span className={combineClassNames(textClassName)}>{text}</span>}
			{children}
			{rightIcon}
		</button>
	);
};

export default Button;
