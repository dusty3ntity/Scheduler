import express from "express";

import { events } from "./events";

const app = express();

app.get("/api/events", (_, res) => res.send(events));

app.listen(5080, () => {
	console.log("Server running on port 5080");
});
