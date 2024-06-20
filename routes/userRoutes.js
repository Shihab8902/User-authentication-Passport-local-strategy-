const passport = require("passport");
const handleRegisterUser = require("../controllers/registerUser");
require("../config/passport")
const router = require("express").Router();


router.post("/register", handleRegisterUser);
router.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/profile');
    });

//Logout
router.get('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});


module.exports = router;