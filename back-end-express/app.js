// load .env data into process.env
require("dotenv").config();

const { sendText } = require("./twilio/send_sms");
const CronJob = require("cron").CronJob;

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
const vegetablesRouter = require("./routes/vegetables");
//API routes
app.use("/api/users", usersRouter);
// app.use("/api/gardens", gardensRouter);
app.use("/api/vegetables", vegetablesRouter);

// CRON JOB function
console.log("Before job instantiation");
//min past, hour, Day of Month: 1-31, Months: 0-11 (Jan-Dec), Day of Week: 0-6 (Sun-Sat)

const job = new CronJob("05 17 19 10 5", function () {
  const d = new Date();
  console.log("At one Minutes:", d);
  sendText();
});
console.log("After job instantiation");
job.start();

//END CRON JOB

// resource routes
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
