import React from "react";

import { ComponentProps } from "../../models/components";
import { combineClassNames } from "../../utils/components/classNames";

export const LoadingIndicator: React.FC<ComponentProps> = ({ id, className, ...props }) => {
	return (
		<svg
			id={id}
			className={combineClassNames("icon", "loading-indicator", className)}
			viewBox="0 0 50 50"
			{...props}
		>
			<path d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z" />
		</svg>
	);
};
