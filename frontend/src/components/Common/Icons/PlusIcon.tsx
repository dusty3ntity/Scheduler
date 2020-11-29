import React from "react";

import { ComponentProps } from "../../../models/components";
import { combineClassNames } from "../../../utils/components/classNames";

import "./icons.scss";

/**
 * Icon name: add-24px
 */
export const PlusIcon: React.FC<ComponentProps> = ({ id, className, ...props }) => (
	<svg id={id} className={combineClassNames("icon plus-icon", className, "light-background")} viewBox="0 0 24 24" {...props}>
		<path d="M0 0h24v24H0V0z" fill="none" />
		<path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" />
	</svg>
);
