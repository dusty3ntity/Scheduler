import React from "react";
import ReactDOM from "react-dom";

import { EventI } from "./../../models/events";
import { ComponentProps } from "../../models/components";
import { EventCardModal } from "../../components/Events/EventModal";

export const createEventModal = (event: EventI, options?: ComponentProps): void => {
	const modalContainer = document.createElement("div");
	document.body.appendChild(modalContainer);

	const destroyModal = (): void => {
		const unmountResult = ReactDOM.unmountComponentAtNode(modalContainer);
		if (unmountResult && modalContainer.parentNode) {
			modalContainer.parentNode.removeChild(modalContainer);
		}
	};

	ReactDOM.render(
		React.createElement(EventCardModal, {
			onExit: destroyModal,
			event: event,
			...options,
		}),
		modalContainer
	);
};
