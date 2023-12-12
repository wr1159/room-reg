const twilio = require("twilio");
require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);

export const sendSMS = (phoneNumber: string) => {
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber,
      body: "It's your turn to bid for a room!",
    })
    .then((message: any) => console.log(message.sid));
};
