const mongoose = require("mongoose");


async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log("Connect to DB");
        })

        connection.on('error', (error) => {
            console.log("Something is wrong in mongo db", error);
        })
        console.log("Connect to DB");
    } catch (error) {
        console.log("Connect fail", error.message);
    }
}

module.exports = connectDB