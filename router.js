const express = require("express");
const router = express.Router();
const handleError = require("./middleware/error");
const verifyUser = require("./middleware/verifyuser");
const { createModules, updateModules, deleteModules, sendModules } = require("./utils/modules");
const { login, register, updateUserBackground, getUserBackground } = require("./utils/users");

router.post("/login", login);
router.post("/register", register);
router.get("/module", verifyUser, sendModules);
router.get("/background", verifyUser, getUserBackground);
router.post("/update/background", verifyUser, updateUserBackground);
router.post("/create", verifyUser, createModules);
router.post("/delete", verifyUser, deleteModules);
router.post("/update", verifyUser, updateModules);
router.use(handleError);
module.exports = router;
