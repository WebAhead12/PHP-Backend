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

//gets the user from the database
function getUser(username) {
  return db.query("SELECT * FROM users WHERE username = $1", [username]).then((data) => data.rows);
}
module.exports = { createUser, getUser };
