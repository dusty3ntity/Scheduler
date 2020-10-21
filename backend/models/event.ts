import mongoose from "mongoose";

import { IEvent } from "./../interfaces/IEvent";

const Event = new mongoose.Schema({
	title: String,
	startDate: Date,
	endDate: Date,
});

export default mongoose.model<IEvent & mongoose.Document>("event", Event);
