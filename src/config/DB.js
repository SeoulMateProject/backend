const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const dbConnection = process.env.DB_CONNECTION;
    if (!dbConnection) {
      throw new Error("DB_CONNECTION environment variable is not defined");
    }
    await mongoose.connect(dbConnection);
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
