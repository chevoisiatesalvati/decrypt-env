var readlineSync = require("readline-sync");
var fs = require("fs");
// Function to delete .env file
const envDelete = () => {
  try {
    fs.unlinkSync("./.env");
    console.log(`.env file removed.`);
  } catch (err) {
    console.error(err);
  }
};
// Decrypt .env file
while (true) {
  let pwd = readlineSync.question("Enter the password: ");
  require("dotenvenc").decrypt({ passwd: pwd });
  require("dotenv").config();
  console.log(process.env.DECRYPTED);
  if (process.env.DECRYPTED == "ok") {
    console.log(`Correct! You're my guy :)`);
    envDelete();
    break;
  } else {
    console.error("Wrong password.");
    envDelete();
    process.exit(1);
  }
}

console.log(process.env.SECRET);
