import express from "express";

const app = express();

const events = require("./eventsInput");
const array = [events];

app.get("/api", (req, res) => res.send(array));

app.listen(5080, () => {
	console.log("Server running on port 5080");
});
