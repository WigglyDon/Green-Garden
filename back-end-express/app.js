// load .env data into process.env
require("dotenv").config();

// Express Server confi

const PORT = process.env.PORT || 8080;
// const ENV = process.env.ENV || "development";
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// const cookieSession = require("cookie-session");
const morgan = require("morgan");
const app = express();
const db = require("./db");

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

const usersRouter = require("./routes/users");
// const gardensRouter = require("./routes/gardens");
// const vegetablesrouter = require("./routes/vegetables");
//API routes
app.use("/api/users", usersRouter);
// app.use("/api/gardens", gardensRouter);
// app.use("/api/vegetables", vegetablesRouter);

// resource routes
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
