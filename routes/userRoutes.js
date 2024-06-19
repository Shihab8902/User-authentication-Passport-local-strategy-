const handleRegisterUser = require("../controllers/registerUser");

const router = require("express").Router();


router.post("/register", handleRegisterUser);


module.exports = router;