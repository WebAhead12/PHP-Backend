const model = require("../model/users");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");

dotenv.config();
const SECRET = process.env.SECRET;

/// function to register
function register(req, res, next) {
  const username = req.body.username;
  //we search for the user in the data to check if the username is already taken
  model
    .getUser(username)
    .then((find) => {
      if (find.length == 0) {
        //if it returns an empty array then there is no user with that username
        model
          .createUser(req.body) //function to create a user using the username and passowrd
          .then(() => {
            // sending a response with the username access token and id
            const response = { response: "nottaken" };
            res.status(201).send(response);
          });
      } else {
        const response = { response: "taken" };
        res.status(401).send(response);
      }
    })
    .catch((_error) => {
      const error = new Error({ response: "Something went wrong while trying to register" });
      error.status = 404;
      next(error);
    });
}

function login(req, res, next) {
  const user = req.body;
  //we search for the user
  model
    .getUser(user.username)
    .then((find) => {
      //if the getUser function returns and empty array there is no user in our database
      if (find.length == 0) {
        const response = { response: "noUser" };
        res.status(401).send(response);
      } else {
        //if there is a user it compares the password in the req.body to the password in the database
        const dbPassword = find[0].password;
        bcrypt.compare(user.password, dbPassword).then((match) => {
          if (!match) {
            res.send({ response: "wrong password" });
          } else {
            //if it is correct it creates a token
            const token = jwt.sign({ username: user.username, id: find[0].id }, SECRET, { expiresIn: "1h" });
            const response = {
              access_token: token,
              response: "success",
            };
            res.status(200).send(response);
          }
        });
      }
    })
    .catch((_error) => {
      const error = new Error("Something went wrong while trying to login");
      error.status = 404;
      next(error);
    });
}
module.exports = { login, register };
