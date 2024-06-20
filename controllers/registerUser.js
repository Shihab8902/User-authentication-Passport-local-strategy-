const bcrypt = require("bcrypt");
const userCollection = require("../model/userModel");

const handleRegisterUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        //Check for user duplication
        const isUserExist = await userCollection.findOne({ username });

        if (isUserExist) {
            return res.status(400).send({ message: "Username already in use!" })
        }

        //Hashing and Salting plain password
        bcrypt.hash(password, 10, async (err, hash) => {
            if (err) {
                return res.status(500).send(err.message)
            }

            const newUser = new userCollection({ username, password: hash });

            await newUser.save();
            res.redirect("/login");

        });

    }
    catch (error) {
        console.log(error.message);
    }
}


module.exports = handleRegisterUser;