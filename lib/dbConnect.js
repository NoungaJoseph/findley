const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');

mongoose.connect(MONGODB_URI, {
    dbName: 'finly-db', // Adjust this if necessary
    bufferCommands: false,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});