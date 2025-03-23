const express = require("express");
const { register, login,recovery_password,resetPassword } = require("../controllers/usercontroller");
const { newstudentrecord } = require("../controllers/studentcontroller");
const {newreportcard}=require("../controllers/nurkg");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/recovery", recovery_password);
router.post("/resetpassword", resetPassword);

//studentdata
router.post("/newstudentrecord",newstudentrecord);

//reportcard
router.post("/newreportcard",newreportcard);
module.exports = router;
