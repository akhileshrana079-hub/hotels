const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hotels');

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.log('MongoDB connection error:', err);
});

module.exports = db;