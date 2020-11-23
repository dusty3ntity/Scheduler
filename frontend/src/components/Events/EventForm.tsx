import moment from "moment";
import React from "react";
import { Controller, useForm } from "react-hook-form";

import { ComponentProps } from "../../models/components";
import { EventI, NewEventFormValuesI } from "../../models/events";
import { times } from "../../models/time";
import { combineClassNames } from "../../utils/classNames";
import { getNextTimeValue } from "../../utils/time";
import { Button } from "../Common/Inputs/Button";
import { DatePicker } from "../Common/Inputs/DatePicker";
import { TimePicker } from "../Common/Inputs/TimePicker";

export interface EventFormFields {
	title: string;
	date: Date;
	timeFrom: string;
	timeTo: string;
}

export interface EventFormProps extends ComponentProps {
	event?: EventI;
	newEventData?: NewEventFormValuesI;
	onSubmit: (event: EventI) => void;
}

export const EventForm: React.FC<EventFormProps> = ({ id, className, event, newEventData, onSubmit }) => {
	const defaultFormValues = {
		title: event?.title || "",
		date: event?.startDate || newEventData?.date,
		timeFrom: event ? moment(event.startDate).format("h:mm") : newEventData?.timeFrom,
		timeTo: event ? moment(event.endDate).format("h:mm") : getNextTimeValue(newEventData!.timeFrom!),
	};

	const { register, control, watch, formState, handleSubmit } = useForm<EventFormFields>({
		defaultValues: defaultFormValues,
	});

	const submit = (data: EventFormFields): void => {
		const { title, date, timeFrom, timeTo } = data;

		const event: EventI = {
			title: title || "(no title)",
			startDate: moment(date)
				.set({ hour: +timeFrom.split(":")[0], minute: +timeFrom.split(":")[1], second: 0 })
				.toDate(),
			endDate: moment(date)
				.set({ hour: +timeTo.split(":")[0], minute: +timeTo.split(":")[1], second: 0 })
				.toDate(),
		};

		onSubmit(event);
	};

	const filterTimeToValues = (): string[] => {
		//paste time validation
		const timeFrom = moment(watch("timeFrom"), "h:mm");
		return times.filter((time) => moment(time, "h:mm").diff(timeFrom) > 0);
	};

	return (
		<form id={id} className={combineClassNames("event-form", className)} onSubmit={handleSubmit(submit)}>
			<div className="inputs-container">
				<input
					name="title"
					className="text-input title-input"
					type="text"
					placeholder="Add title"
					autoFocus
					ref={register()}
				/>

				<div className="time-row">
					<Controller as={DatePicker} name="date" control={control} />

					<div className="times-container">
						<Controller
							as={TimePicker}
							className="time-from-picker"
							values={times}
							name="timeFrom"
							control={control}
						/>

						<span>to</span>

						<Controller
							as={TimePicker}
							className="time-to-picker"
							values={filterTimeToValues()}
							name="timeTo"
							control={control}
						/>
					</div>
				</div>
			</div>

			<Button className="submit-btn" text="Create" type="submit" disabled={event && !formState.isDirty} />
		</form>
	);
};
