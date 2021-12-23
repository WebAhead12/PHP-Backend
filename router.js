const express = require("express");
const router = express.Router();
const handleError = require("./middleware/error");
const verifyUser = require("./middleware/verifyuser");
const { createModules, updateModules, deleteModules, sendModules } = require("./utils/modules");
const { login, register, updateUserBackground } = require("./utils/users");

router.post("/login", login);
router.post("/register", register);
router.get("/module/:name", verifyUser, sendModules);
router.post("/update/:name", verifyUser, updateModules);
router.post("/create", verifyUser, createModules);
router.post("/delete", verifyUser, deleteModules);
router.post("/update", verifyUser, updateModules);
router.use(handleError);
module.exports = router;
