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

const postNotification = function (notificationFormData, id) {
  const getDayNumber = (daysObj) => {
    let arr = [];
    for (const number in daysObj) {
      if (daysObj[number]) {
        arr.push(parseInt(number));
      }
    }
    return arr;
  };
  const daysObj = notificationFormData.days;
  const timeinUTC = notificationFormData.time;
  const numbersArray = getDayNumber(daysObj);
  const numbersArrayString = JSON.stringify(numbersArray);

  const text = `
  INSERT INTO notifications (garden_id, day, time, body)
  VALUES
  (${id},ARRAY ${numbersArrayString}, '${timeinUTC}','Please water your garden now!')
`;
  return db
    .query(text)
    .then((data) => data.rows)
    .catch((err) => console.error(this, "query failed", err.stack));
};

module.exports = { getAllNotifications, postNotification };
