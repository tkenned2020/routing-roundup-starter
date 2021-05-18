const express = require("express");
const app = express();
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get(/^\/[a-zA-Z0-9\-_]*xyz$/, (req, res) => {
  res.send("That's all I wrote.");
});

app.get("/capital-letters/:id", (req, res) => {
  res.send(`${req.params.id}`.Uppercase());
});

app.all(/^\/[a-zA-Z0-9\-_]*$/, (req, res) => {
  console.log(`Request method: ${req.method}`);
  console.log(`Request path: ${req.path}`);

  const pageData = {
    method: req.method,
    path: req.path,
    randomNumber: Math.floor(Math.random() * 100),
    title: "Express app",
    heading: "Express Practice",
  };
  res.render("something", pageData);
});

const port = 8081;

app.listen(port, () => console.log(`Listening for port ${port}...`));
// const user = express.Router();
