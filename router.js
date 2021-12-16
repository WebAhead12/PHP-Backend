const express = require("express");
const router = express.Router();
const handleError = require("./middleware/error");
// const verifyUser = require("./middleware/verifyuser");
const {
  createModules,
  updateModules,
  deleteModules,
  sendModules,
} = require("./utils/modules");
const { login, register } = require("./utils/users");

router.post("/login", login);
router.post("/register", register);
router.get("/module/:name", sendModules);
router.post("/create", createModules);
router.post("/delete", deleteModules);
router.post("/update", updateModules);
router.use(handleError);
module.exports = router;
