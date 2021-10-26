const express = require("express");
const app = express();
const port = 8000;
const apiRouter = require("./routes/index");
const { logErrors, errorHandler } = require("./middlewares/errorHandlers");
const generateUsers  = require('./generateUsers')

let usersArray = generateUsers()

console.log(usersArray);

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello World!");
});

apiRouter(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port: http://localhost:${port}`);
});
