const db = require("../database/connection");
const bcrypt = require("bcryptjs");

//Inserts a new user to the database
function createUser(user) {
  return bcrypt
    .genSalt(10)
    .then((salt) => bcrypt.hash(user.password, salt))
    .then((hash) => {
      const values = [user.username, hash.toString(), (user.background = "")];
      return db.query("INSERT INTO users (username,password,background) VALUES($1,$2,$3)", values);
    });
}

function updateBackground(background, userId) {
  return db.query("UPDATE users SET background=$1 WHERE id=$2", [background, userId]);
}

function getBackground(userId) {
  return db.query("SELECT background FROM users WHERE id=$1", [userId]).then((data) => data.rows);
}

//gets the user from the database
function getUser(username) {
  console.log(username);
  return db.query("SELECT * FROM users WHERE username = $1", [username]).then((data) => data.rows);
}
module.exports = { createUser, getUser, updateBackground, getBackground };
