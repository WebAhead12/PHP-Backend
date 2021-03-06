const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();
const SECRET = process.env.SECRET;

function verifyUser(req, res, next) {
  console.log(req.headers.authorization);
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    const error = new Error("Authorization header required");
    error.status = 400;
    next(error);
  }
  const token = authHeader.replace("Bearer ", "");
  console.log(1);
  try {
    const tokenData = jwt.verify(token, SECRET);
    console.log(2);
    req.username = tokenData.username;
    req.id = tokenData.id;
    next();
  } catch (_error) {
    console.log(_error);
    const error = new Error("Invalid token");
    error.status = 401;
    next(error);
  }
}

module.exports = verifyUser;
