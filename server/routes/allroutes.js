const express = require("express");
const { register, login,recovery_password,resetPassword } = require("../controllers/usercontroller");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/recovery", recovery_password);
router.post("/resetpassword", resetPassword);
module.exports = router;
