const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Import Models
const models = require("./models/index");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/users", async (req, res) => {
  const users = await models.User.findAll();
  res.send({
    status: true,
    message: "Get all user",
    data: users,
  });
});

app.get("/cars", async (req, res) => {
  const cars = await models.Car.findAll();
  res.send({
    status: true,
    message: "Get all car",
    data: cars,
  });
});

app.get("/bids", async (req, res) => {
  res.send({
    status: true,
    message: "bids",
  });
});

app.get("/bids/:id", async (req, res) => {
  // SSE
  console.log("Got /events");
  res.set({
    "Cache-Control": "no-cache",
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
  });
  res.flushHeaders();

  // Tell the client to retry every 10 seconds if connectivity is lost
  res.write("retry: 10000\n\n");
  let count = 0;

  while (true) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Emit", ++count);
    // Emit an SSE that contains the current 'count' as a string
    res.write(`data: ${count}\n\n`);
  }
  res.send({
    status: true,
    message: `bid ${req.params.id}`,
  });
});

app.post("/bids/:id", async (req, res) => {
  res.send({
    status: true,
    message: `bid post ${req.params.id}`,
    body: req.body,
  });
});

app.post("/user/buy", async (req, res) => {
  res.send({
    status: true,
    message: "Buy",
    body: req.body,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
