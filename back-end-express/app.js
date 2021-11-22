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

const cors = require("cors");

// Middleware

app.use(cors());
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
const gardensRouter = require("./routes/gardens");

//API routes
app.use("/api/users", usersRouter);
app.use("/api/gardens", gardensRouter);
app.use("/api/vegetables", vegetablesRouter);
app.use("/api/notifications", notificationsRouter);
app.use("/api/gardens", gardensRouter);

// CRON JOB function
// console.log("Before job instantiation");
//seconds, min past, hour, Day of Month: 1-31, Months: 0-11 (Jan-Dec), Day of Week: 0-6 (Sun-Sat)
// / looping cron job
// const job = new CronJob("* * * * * *", function () {
//   const activeJobs = {}

//       const send = new CronJob(`* * * * *`, function () {
//         if (!activeJobs.thisJob) {
//            activeJobs.push(thisJob)
//            sendText(phone_number, body);
// }       else { do nothing }

const looperJob = new CronJob("*/5 * * * * *", function () {
  // const d = new Date();
  // console.log("First Chron:", d);

  getAllNotifications().then((notifications) => {
    const activeJobs = {};
    const inactiveJobs = {};

    console.log(notifications[0].id);

    if (notifications[0].id) {
      console.log("is there!");
    }
    activeJobs[notifications[0].id] = notifications[0].id;
    getAllUsers().then((user) => {
      const id = notifications[0].id;
      const min = notifications[0].minute;
      const hour = notifications[0].hour;
      const day = notifications[0].day;
      const phone_number = user[0].phone_number;
      const body = notifications[0].body;
      console.log(`${min} ${hour} 20 10 ${day}`);
      const send = new CronJob(`${min} ${hour} 20 10 ${day}`, function () {
        const e = new Date();
        //push the job to active
        //obj[key] == true
        //activeJobs = id
        sendText(phone_number, body);
        console.log("Second Chron:", e);
      });
      send.start();
    });
  });
});

console.log("After job instantiation");
// console.log(looperJob);
looperJob.start();
//END CRON JOB

// resource routes
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
