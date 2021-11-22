const {
  getAllNotifications,
  postNotification,
} = require("../db/helpers/notification-queries");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  getAllNotifications()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.post("/1", (req, res) => {
  const notificationFormData = req.body.state;
  const time = req.body.time;
  // console.log(time);
  // console.log("formdata", notificationFormData.time.toString());
  postNotification(notificationFormData, time)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = router;
