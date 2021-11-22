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

//       const send = new CronJob(`* * * * *`, function () {
//         if (!activeJobs.thisJob) {
//            activeJobs.push(thisJob)
//            sendText(phone_number, body);
// }       else { do nothing }



// * Seconds: 0-59
// * Minutes: 0-59
// * Hours: 0-23
// * Day of Month: 1-31
// * Months: 0-11 (Jan-Dec)
// * Day of Week: 0-6 (Sun-Sat)

// (CUSTOM TIMES)
// '00 00 00 * * *' -> Midnight for Demo
// '0 */10 * * * *' -> Every 10 minutes

const midnightScanner = new CronJob("15 46 * * * *", function () {
  console.log("20")
  getAllNotifications().then((notifications) => {
    activeJobs[notifications[0].id] = notifications[0].id;
    getAllUsers().then((user) => {
      const id = notifications[0].id;
      const min = notifications[0].minute;
      const hour = notifications[0].hour;
      const day = notifications[0].day;
      const body = notifications[0].body;
      const phone_number = user[0].phone_number;
      // const send = new CronJob(`${min} ${hour} 20 10 ${day}`, function () {
        const sendOne = new CronJob("30 46 * * * *", function () {
          console.log("21")
          sendText(phone_number, body);
        });
        const sendTwo = new CronJob("45 46 * * * *", function () {
          console.log("22")
          sendText(phone_number, body);
      });
        sendOne.start();
        sendTwo.start();
  });
// });
});
});

midnightScanner.start();


app.listen(PORT, () => {
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
