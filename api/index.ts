import express from "express";


const app = express();

const events=require("./eventsInput");
const array = [events];


app.get('/api', (req, res) => res.send(array));

app.listen(4000, () => {
 console.log("Server running on port 4000");
});

