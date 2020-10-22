import { Response, Router, Request } from "express";
import Joi from "joi";

import Event from "../../models/event";

const initEventsRoutes = (router: Router): void => {
	const route = Router();

	router.use("/events", route);

	route.get("/", async (_, res: Response) => {
		const events = await Event.find({});
		return res.json(events).status(200);
	});

	route.get("/:id", async (req: Request, res: Response) => {
		try {
			const event = (await Event.find({ _id: req.params.id }))[0];

			if (event) {
				return res.json(event).status(200);
			}

			return res.status(404).end();
		} catch {
			return res.status(500).end();
		}
	});

	route.post(
		"/",
		(req, res, next) => {
			const createRules = Joi.object({
				title: Joi.string().required().min(5).max(50),
				startDate: Joi.date().required(),
				endDate: Joi.date().required(),
			});

			const result = createRules.validate(req.body);

			if (result.error) {
				return res.status(400).json({ message: "missing required field" });
			}
			next();
		},
		async (req: Request, res: Response) => {
			try {
				const event = new Event(req.body);
				const success = await event.save();

				if (success) {
					return res.status(201).end();
				}

				throw new Error("Problem saving changes");
			} catch (err) {
				return res.status(500).end();
			}
		}
	);

	route.put(
		"/:id",
		(req, res, next) => {
			const createContactRules = Joi.object({
				title: Joi.string().min(5).max(50),
				startDate: Joi.date(),
				endDate: Joi.date(),
			});

			const result = createContactRules.validate(req.body);

			if (result.error) {
				return res.status(400).json({ message: "missing fields" });
			}
			next();
		},
		async (req: Request, res: Response) => {
			try {
				const result = await Event.updateOne({ _id: req.params.id }, req.body);

				if (result.nModified) {
					return res.status(204).end();
				}

				return res.status(404).end();
			} catch (err) {
				return res.status(500).end();
			}
		}
	);

	route.delete("/:id", async (req: Request, res: Response) => {
		try {
			const result = await Event.deleteOne({ _id: req.params.id });

			if (result.deletedCount) {
				return res.status(204).end();
			}

			return res.status(404).end();
		} catch (err) {
			return res.status(500).end();
		}
	});
};

export default initEventsRoutes;
