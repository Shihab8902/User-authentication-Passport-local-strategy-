const passport = require("passport");
const bcrypt = require("bcrypt")
const userCollection = require("../model/userModel");
const LocalStrategy = require("passport-local").Strategy;



passport.use(new LocalStrategy(
    async function (username, password, done) {
        try {
            const user = await userCollection.findOne({ username: username });
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return done(null, false, { message: 'Incorrect password.' });
            }

            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }
));



//Serialize and Deserialize user

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await userCollection.findById(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});

