import React from "react";
import { useForm } from "react-hook-form";

import Button from "../common/inputs/Button";

const EventForm: React.FC = () => {
	const { register, handleSubmit } = useForm();

	const submit = (data: { title: string }): void => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(submit)}>
			<input name="title" className="text-input title" type="text" autoFocus ref={register()} />

			<Button text="Create" type="submit" />
		</form>
	);
};

export default EventForm;
