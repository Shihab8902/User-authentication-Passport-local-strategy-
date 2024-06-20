const verifyLogin = require("../middlewares/verifyLogin");

const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("index")
});

router.get("/login", (req, res) => {
    if (req.isAuthenticated()) {
        return res.redirect("/profile");
    }
    res.render("login")
});

router.get("/register", (req, res) => {
    if (req.isAuthenticated()) {
        return res.redirect("/profile");
    }
    res.render("register");
});

router.get("/profile", verifyLogin, (req, res) => {
    res.render("profile");
})


module.exports = router;



