import React from "react";
import moment from "moment";

import { EventI } from "../../models/events";
import { ComponentProps } from "../../models/components";
import { combineClassNames } from "../../utils/components/classNames";
import { getFullDateString } from "../../utils/time";
import { Button } from "../Common/Inputs/Button";
import { EditIcon } from "../Common/Icons/EditIcon";
import { DeleteIcon } from "../Common/Icons/DeleteIcon";
import { CrossIcon } from "../Common/Icons/CrossIcon";

export interface EventCardModal extends ComponentProps {
	event: EventI;
	onEdit: () => void;
	onDelete: () => Promise<void>;
	onExit: () => void;
}

export const EventCardModal: React.FC<EventCardModal> = ({
	event,
	onEdit,
	onDelete,
	onExit,
	id,
	className,
	...props
}) => {
	const startDate = moment(event.startDate);
	const endDate = moment(event.endDate);
	const dateString = getFullDateString(startDate, endDate);

	const handleEdit = (): void => {
		onEdit();
		onExit();
	};

	const handleDelete = async (): Promise<void> => {
		await onDelete();
		onExit();
	};

	return (
		<div id={id} className={combineClassNames("modal", "event-modal", className)} {...props}>
			<div className="modal-mask" onClick={onExit} />

			<div className="modal-content">
				<div className="actions-row">
					<Button className="actions-btn" icon={<EditIcon />} onClick={handleEdit} />
					<Button className="actions-btn" icon={<DeleteIcon />} onClick={handleDelete} />
					<Button className="actions-btn" icon={<CrossIcon />} onClick={onExit} />
				</div>

				<div className="event-details-row">
					<div className="icon-col">
						<div className="color-icon" />
					</div>

					<div className="data-col">
						<span className="title">{event.title}</span>
						<span className="date">{dateString}</span>
					</div>
				</div>
			</div>
		</div>
	);
};
