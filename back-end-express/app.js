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
const {
  getAllNotifications,
} = require("../back-end-express/db/helpers/notification-queries");
const { getAllUsers } = require("../back-end-express/db/helpers/user-queries");

// const gardensRouter = require("./routes/gardens");
const usersRouter = require("./routes/users");
const vegetablesRouter = require("./routes/vegetables");
const notificationsRouter = require("./routes/notifications");

//API routes
app.use("/api/users", usersRouter);
// app.use("/api/gardens", gardensRouter);
app.use("/api/vegetables", vegetablesRouter);
app.use("/api/notifications", notificationsRouter);

// CRON JOB function
// console.log("Before job instantiation");
//seconds, min past, hour, Day of Month: 1-31, Months: 0-11 (Jan-Dec), Day of Week: 0-6 (Sun-Sat)
const job = new CronJob("0 */1 * * * *", function () {
  const d = new Date();
  console.log("First Chron:", d);
  getAllNotifications().then((notifications) => {
    getAllUsers().then((user) => {
      const min = notifications[0].minute;
      const hour = notifications[0].hour;
      const day = notifications[0].day;
      const phone_number = user[0].phone_number;
      const body = notifications[0].body;
      console.log(`${min} ${hour} 20 10 ${day}`);
      const send = new CronJob(`${min} ${hour} 20 10 ${day}`, function () {
        const e = new Date();
        sendText(phone_number, body);
        console.log("Second Chron:", e);
      });
      send.start();
    });
  });
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
