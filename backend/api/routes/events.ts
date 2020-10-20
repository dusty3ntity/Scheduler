import { Response, Router, Request } from "express";

import Event from "../../models/event";

const initEventsRoutes = (router: Router): void => {
  const route = Router();

  router.use("/events", route);

  route.get("/", async (_, res: Response) => {
    const events = await Event.find({});
    return res.json(events).status(200);
  });

  route.post("/", async (req: Request, res: Response) => {
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
  });
};

export default initEventsRoutes;
