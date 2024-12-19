const dotenv = require('dotenv');
const path = require('path');

// Load the .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') });

module.exports = {
    DATABASE_URL: process.env.DATABASE_URL,
    API_KEY: process.env.API_KEY,
    SECRET_KEY: process.env.SECRET_KEY,
    // Add other variables here
};
