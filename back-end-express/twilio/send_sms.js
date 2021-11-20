require("dotenv").config();

function sendText() {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;

  console.log("token", authToken);

  const client = require("twilio")(accountSid, authToken);

  client.messages
    .create({
      body: "Hello!",
      from: "+15623625978",
      to: "+16044426950",
    })
    .then((message) => console.log(message.sid));
}

module.exports = { sendText };
