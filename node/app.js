const express = require("express");
const bodyParser = require("body-parser");
const todosRouter = require("./route/todos");
const app = express();

app.use(bodyParser.json());

app.use(todosRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
