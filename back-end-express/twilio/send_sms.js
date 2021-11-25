require("dotenv").config();

function sendText(phone_number, body) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;

  console.log("token", authToken);

  const client = require("twilio")(accountSid, authToken);

  client.messages
    .create({
      body: body,
      from: "+17633108615",
      to: phone_number,
    })
    .then((message) => console.log(message.sid));
}

module.exports = { sendText };
