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

  const getDayNumber = (daysObj) => {
    let arr = [];
    for (const number in daysObj) {
      if (daysObj[number]) {
        arr.push(parseInt(number));
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
    const array = [parseInt(hourString), parseInt(minString)];
    return array;
  };

  const daysObj = notificationFormData.days;
  console.log(daysObj);
  const hourAndMinArray = timeSplitter(time);
  console.log("hourAndMinArray", hourAndMinArray);
  const numbersArray = getDayNumber(daysObj);
  const numbersArrayString = JSON.stringify(numbersArray);
  console.log("numbersArray", numbersArray);

  const text = `
  INSERT INTO notifications (garden_id, day, hour, minute, body)
  VALUES
  (1,ARRAY ${numbersArrayString},${hourAndMinArray[0]},${hourAndMinArray[1]},'this means sunday, 3:13 pm for garden id 1')
`;
  return db
    .query(text)
    .then((data) => data.rows)
    .catch((err) => console.error(this, "query failed", err.stack));
};

module.exports = { getAllNotifications, postNotification };
