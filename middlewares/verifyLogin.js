const verifyLogin = (req, res, next) => {
    try {
        if (req.isAuthenticated()) {
            next();
            return;
        }
        res.redirect("/login");
    }
    catch (error) {
        console.log(error.message);
    }
}


module.exports = verifyLogin;