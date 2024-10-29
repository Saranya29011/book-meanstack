// config/connectDatabase.js
const mongoose = require('mongoose');

const connectDatabase = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mini-ecommerce'); // Removed deprecated options
        console.log("Connected to MongoDB ");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDatabase;
