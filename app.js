"use strict";
var readlineSync = require("readline-sync");
var fs = require("fs");
// Function to delete .env file
const envDelete = () => {
  let ans = readlineSync.keyInYN(`Do you want to delete .env file?`);
  console.log(ans);
  if (ans) {
    try {
      fs.unlinkSync("./.env");
      console.log(`.env file deleted.`);
    } catch (err) {
      logger.error(err);
    }
  } else {
    console.log(`Ok.`);
  }
};
// Decrypt .env file
let pwd = readlineSync.questionNewPassword("Enter the password: ", {
  min: 4,
});
require("dotenvenc").decrypt({ passwd: pwd });
require("dotenv").config();
if (process.env.DECRYPTED == "ok") {
  console.log(`Correct! You're my guy :)`);
  envDelete();
} else {
  console.error("Wrong password.");
  envDelete();
  process.exit(1);
}

console.log(process.env.SECRET);
