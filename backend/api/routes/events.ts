import { Router } from "express";

import { deleteEvent } from "./events/id/deleteEvent";
import { getEvent } from "./events/id/getEvent";
import { getEvents } from "./events/getEvents";
import { updateEvent } from "./events/id/updateEvent";
import { createEvent } from "./events/createEvent";
import { validateEvent } from "./events/validators/eventValidator";

export const initEventsRoutes = (router: Router): void => {
	router
		.get("/events/", getEvents)
		.get("/events/:id", getEvent)
		.post("/events/", validateEvent, createEvent)
		.put("/events/:id", validateEvent, updateEvent)
		.delete("/events/:id", deleteEvent);
};
