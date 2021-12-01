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
const vegetablesSearchRouter = require("./routes/vegetablesSearch");
const notificationsRouter = require("./routes/notifications");
const gardensRouter = require("./routes/gardens");
const gardensVegetablesRouter = require("./routes/gardensVegetables");

//API routes
app.use("/api/users", usersRouter);
app.use("/api/gardens", gardensRouter);
app.use("/api/vegetables", vegetablesRouter);
app.use("/api/vegetables/search", vegetablesSearchRouter);
app.use("/api/notifications", notificationsRouter);
app.use("/api/gardens", gardensRouter);
app.use("/api/gardensvegetables", gardensVegetablesRouter);
app.use("/api/gardensvegetables/:id", gardensVegetablesRouter);
// (CUSTOM TIMES)
// '00 00 00 * * *' -> Midnight for Demo
// '0 */10 * * * *' -> Every 10 minutes

const timeSplitter = function (string) {
  const date = moment.tz(string, "America/Edmonton"); //converts utc(GMT) object into mountain time utc object
  const dateString = date.format(); //convert to string for parseing
  const dateStringSplitT = dateString.split("T");
  const hourAndMin = dateStringSplitT[1];
  const hourAndMinSplit = hourAndMin.split(":");
  const hour = hourAndMinSplit[0];
  const min = hourAndMinSplit[1];
  const array = [parseInt(hour), parseInt(min)];
  // console.log("hourMinArray", array);
  return array;
};

const midnightScanner = new CronJob("15 12 * * *", function () {
  console.log("midnight scanner ran");
  getAllNotifications().then((notifications) => {
    getAllUsers()
      .then((user) => {
        let cronJobsArray = [];
        for (let i = 0; i < notifications.length; i++) {
          const time = notifications[i].time;
          const hourAndMinArray = timeSplitter(time);
          const hour = hourAndMinArray[0];
          const min = hourAndMinArray[1];
          const body = notifications[i].body;
          const phone_number = user[0].phone_number;
          const daysArray = notifications[i].day;
          // console.log("daysArray", daysArray);
          for (let j = 0; j < daysArray.length; j++) {
            // * Seconds: 0-59
            // * Minutes: 0-59
            // * Hours: 0-23
            // * Day of Month: 1-31
            // * Months: 0-11 (Jan-Dec)
            // * Day of Week: 0-6 (Sun-Sat)
            const day = parseInt(daysArray[j]);
            console.log("day", day);
            const send = new CronJob(`${min} ${hour} * * ${day}`, function () {
              console.log("send job created day", day);
              console.log("send job created hour", hour);
              console.log("send job created min", min);
              // sendText(phone_number, body);
            });
            cronJobsArray.push(send);
          }
          for (let job of cronJobsArray) {
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
