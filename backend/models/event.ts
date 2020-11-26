import mongoose from "mongoose";

import { IEvent } from "./../interfaces/IEvent";

const EventSchema = new mongoose.Schema({
	title: String,
	startDate: Date,
	endDate: Date,
});

export const EventModel = mongoose.model<IEvent & mongoose.Document>("event", EventSchema);
