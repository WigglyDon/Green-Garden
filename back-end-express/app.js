require("dotenv").config();
const { sendText } = require("./twilio/send_sms");
const CronJob = require("cron").CronJob;
const PORT = process.env.PORT || 8080;
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const app = express();
const db = require("./db");
const cors = require("cors");
const moment = require("moment-timezone");

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

// * Seconds: 0-59
// * Minutes: 0-59
// * Hours: 0-23
// * Day of Month: 1-31
// * Months: 0-11 (Jan-Dec)
// * Day of Week: 0-6 (Sun-Sat)

// (CUSTOM TIMES)
// '00 00 00 * * *' -> Midnight for Demo
// '0 */10 * * * *' -> Every 10 minutes
// const send = new CronJob(`${min} ${hour} 20 10 ${day}`, function () {});

// const createCronJob = (time, body,phone_number) => {
//   console.log("creation of cronjob")
//    const job = new CronJob(time, function() {
//      sendText(phone_number, body)
//      console.log('sendText called')
//    })
//   return job;
// }

// const midnightScanner = new CronJob("0 * * * * *", function () {
//   console.log("midnightScanner ran")
//   getAllNotifications().then((notifications) => {
//     getAllUsers().then((user) => {
//       // for (let i = 0; i < notifications.length; i++) {
//       //     const id = notifications[i].id;
//       //     const min = notifications[i].minute;
//       //     const hour = notifications[i].hour;
//       //     const day = notifications[i].day;
//           // const body = notifications[i].body;
//       //     const send = createCronJob(`${min} ${hour} * * ${day}`, body, phone_number);
//       // }
//       const phone_number = user[0].phone_number;
//       const min = notifications[0].minute;
//       const hour = notifications[0].hour;
//       const day = notifications[0].day;
//       const body = notifications[0].body;
//       const send = new CronJob(`${min} ${hour} * * ${day}`, function () {
//         const e = new Date();
//         sendText(phone_number, body);
//         console.log("Second Chron:", e);
//       });
//       console.log("start executed")
//     send.start()
//     });
//   });
// });

const timeSplitter = function (string) {
  const date = moment.tz(string, "America/Edmonton"); //converts utc(GMT) object into mountain time utc object
  const dateString = date.format(); //convert to string for parseing
  const dateStringSplitT = dateString.split("T");
  const hourAndMin = dateStringSplitT[1];
  const hourAndMinSplit = hourAndMin.split(":");
  const hour = hourAndMinSplit[0];
  const min = hourAndMinSplit[1];
  const array = [parseInt(hour), parseInt(min)];
  console.log("hourMinArray", array);
  return array;
};

const midnightScanner = new CronJob("40 13 * * * ", function () {
  console.log("midnight scanner ran");
  getAllNotifications().then((notifications) => {
    getAllUsers()
      .then((user) => {
        let cronJobsArray = [];
        for (let i = 0; i < notifications.length; i++) {
          const time = notifications[0].time;
          const hourAndMinArray = timeSplitter(time);
          const hour = hourAndMinArray[0];
          const min = hourAndMinArray[1];
          const body = notifications[i].body;
          const phone_number = user[0].phone_number;
          const daysArray = notifications[i].day;
          for (let j = 0; j < daysArray.length; j++) {
            // * Seconds: 0-59
            // * Minutes: 0-59
            // * Hours: 0-23
            // * Day of Month: 1-31
            // * Months: 0-11 (Jan-Dec)
            // * Day of Week: 0-6 (Sun-Sat)
            const send = new CronJob(`${min} ${hour} * * *`, function () {
              console.log("send job created hour", hour);
              console.log("send job created min", min);
              // sendText(phone_number, body);
            });
            cronJobsArray.push(send);
          }
          for (let job of cronJobsArray) {
            // console.log("job started", job);
            console.log("job started");
            job.start();
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
});

midnightScanner.start();

app.listen(PORT, () => {
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
