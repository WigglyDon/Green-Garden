const db = require("../");

const getAllNotifications = function () {
  const text = `
  SELECT * FROM notifications
  `;

  return db
    .query(text)
    .then((data) => data.rows)
    .catch((err) => console.error(this, "query failed", err.stack));
};

const postNotification = function (notificationFormData) {
  //   ? = ANY (notifications.day)
  // ? is the day int 0-6

  const getDayNumber = (daysObj) => {
    let arr = [];
    for (const number in daysObj) {
      if (daysObj[number]) {
        arr.push(parseInt(number));
      }
    }
    return arr;
  };
  // console.log("notificationFormData", notificationFormData);
  const daysObj = notificationFormData.days;
  const timeinUTC = notificationFormData.time;
  const numbersArray = getDayNumber(daysObj);
  const numbersArrayString = JSON.stringify(numbersArray);
  // console.log("timeinUTC", timeinUTC);

  const text = `
  INSERT INTO notifications (garden_id, day, time, body)
  VALUES
  (1,ARRAY ${numbersArrayString}, '${timeinUTC}','this means sunday, 3:13 pm for garden id 1')
`;
  return db
    .query(text)
    .then((data) => data.rows)
    .catch((err) => console.error(this, "query failed", err.stack));
};

module.exports = { getAllNotifications, postNotification };
