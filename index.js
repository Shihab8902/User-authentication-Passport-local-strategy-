require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/database");

const PORT = process.env.PORT || 5000;

const run = async () => {
    await connectDB();
    app.listen(PORT, () => {

        console.log(`The server is running at http://localhost:${PORT}`)
    })
}


run();