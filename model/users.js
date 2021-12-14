const db = require("../database/connection");
const bcrypt = require("bcryptjs");

//Inserts a new user to the database
export function createUser(user) {
  return bcrypt
    .genSalt(10)
    .then((salt) => bcrypt.hash(user.passwords, salt))
    .then((hash) => {
      const values = [user.username, hash.toString()];
      return db.query(
        "INSERT INTO users (username,password) VALUES($1,$2)",
        values
      );
    });
}

//gets the user from the database
export function getUser(user) {
  return db
    .query("SELECT * FROM users WHERE username = $1", user)
    .then((data) => data.rows);
}
