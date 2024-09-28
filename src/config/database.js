const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://rahulwan:UfkzD6nC50iF3zfH@cluster0.m3m75.mongodb.net/Socialdev"
  );
};

module.exports = connectDB;
