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

const postNotification = function (notificationFormData, time) {
  //   ? = ANY (notifications.day)
  // ? is the day int 0-6
  const getDayNumber = (days) => {
    let arr = [];
    for (const number in days) {
      if (days[number]) {
        arr.push(number);
      }
    }
    return arr;
  };
  const timeSplitter = function (string) {
    const date = string.split(" ");
    const num = date[4];
    const further = num.split(":");
    const hourString = further[0];
    const minString = further[1];
    const array = [hourString, minString];
    return array;
  };

  const days = notificationFormData.days;
  const hourAndMin = timeSplitter(time);
  const numbersArray = getDayNumber(days);
  console.log("days", days);
  console.log("hour", hourAndMin[0]);
  console.log("min", hourAndMin[1]);
  console.log("numbersArray", numbersArray);

  const text = `
  INSERT INTO notifications (garden_id, day, hour, minute, body)
  VALUES
  (1,${numbersArray[0]},${hourAndMin[0]},${hourAndMin[1]},'this means sunday, 3:13 pm for garden id 1')
  `;
  return db
    .query(text)
    .then((data) => data.rows)
    .catch((err) => console.error(this, "query failed", err.stack));
};

module.exports = { getAllNotifications, postNotification };
