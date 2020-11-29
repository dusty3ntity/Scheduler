import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import moment from "moment";
import { useTranslation } from "react-i18next";

import { EventI, NewEventFormValuesI, EventFormValuesI } from "../../models/events";
import { times } from "../../models/time";
import { combineClassNames } from "../../utils/components/classNames";
import { getNextTimeValue } from "../../utils/time";
import { getIsTimeValid, getIsTimeFromBeforeTimeTo } from "../../utils/validators/time";
import { DatePicker } from "../Common/Inputs/DatePicker";
import { TimePicker } from "../Common/Inputs/TimePicker";
import { ComponentProps } from "../../models/components";
import { Button } from "../Common/Inputs/Button";

import "./event-form.scss";

interface EventFormFields {
	title: string;
	date: Date;
	timeFrom: string;
	timeTo: string;
}

export interface EventFormProps extends ComponentProps {
	event?: EventI;
	newEventData?: NewEventFormValuesI;
	onSubmit: (event: EventFormValuesI) => void;
	submitting: boolean;
}

export const EventForm: React.FC<EventFormProps> = ({ id, className, event, newEventData, onSubmit, submitting }) => {
	const defaultFormValues = {
		title: event?.title || "",
		date: event?.startDate || newEventData?.date,
		timeFrom: event ? moment(event.startDate).format("HH:mm") : newEventData?.timeFrom || "8:00",
		timeTo: event ? moment(event.endDate).format("kk:mm") : getNextTimeValue(newEventData?.timeFrom || "8:00"),
	};

	const { register, control, watch, formState, handleSubmit, getValues, errors, trigger } = useForm<EventFormFields>({
		defaultValues: defaultFormValues,
		mode: "onChange",
	});

	const submit = (data: EventFormFields): void => {
		const { title, date, timeFrom, timeTo } = data;

		const event: EventFormValuesI = {
			title: title || `(${t("event_form_title_default_value")})`,
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
		const timeFrom = moment(watch("timeFrom"), "HH:mm");
		return times.filter((time) => moment(time, "HH:mm").diff(timeFrom) > 0);
	};

	const timeFrom = watch("timeFrom");
	const timeTo = watch("timeTo");

	useEffect(() => {
		trigger("timeFrom");
		trigger("timeTo");
	}, [timeFrom, timeTo, trigger]);

	const { t } = useTranslation();

	return (
		<form id={id} className={combineClassNames("event-form", className)} onSubmit={handleSubmit(submit)}>
			<div className="inputs-container">
				<input
					name="title"
					className="text-input title-input"
					type="text"
					placeholder={t("event_form_title_input_placeholder")}
					autoFocus
					maxLength={50}
					ref={register()}
				/>

				<div className="time-row">
					<Controller as={DatePicker} name="date" control={control} />

					<div className="times-container">
						<Controller
							as={TimePicker}
							className={combineClassNames("time-from-picker", { error: errors.timeFrom })}
							values={times}
							name="timeFrom"
							control={control}
							rules={{
								validate: (val: string): boolean =>
									getIsTimeValid(val) && getIsTimeFromBeforeTimeTo(val, getValues("timeTo")),
							}}
						/>

						<span>{t("event_form_time_to_prefix")}</span>

						<Controller
							as={TimePicker}
							className={combineClassNames("time-to-picker", { error: errors.timeTo })}
							values={filterTimeToValues()}
							name="timeTo"
							control={control}
							rules={{
								validate: (val: string): boolean =>
									getIsTimeValid(val) && getIsTimeFromBeforeTimeTo(getValues("timeFrom"), val),
							}}
						/>
					</div>
				</div>
			</div>

			<Button
				className="submit-btn"
				text={event ? t("event_form_update_button") : t("event_form_create_button")}
				type="submit"
				disabled={(!formState.isValid && formState.isDirty) || (event && !formState.isDirty)}
				loading={submitting}
			/>
		</form>
	);
};
