const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const connectDatabase = require('./config/connectDatabase');

// Load environment variables
dotenv.config();

// Route imports
const products = require('./routes/product');
const orders = require('./routes/order');
const users = require('./routes/user'); // Import the user routes

// Connect to the database
connectDatabase();

// Middleware setup
app.use(express.json());
app.use(cors());

// Route middleware
app.use('/api/v1', products);
app.use('/api/v1', orders);
app.use('/api/v1/users', users); // Add the user routes here

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist', 'frontend', 'browser')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'frontend', 'dist', 'frontend', 'browser', 'index.html'));
    });
}

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server listening on Port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});
