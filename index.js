const express = require('express');
const morgan = require('morgan');

const userRouter = require('./routes/user.route');
require('dotenv').config(); // Load environment variables
require('./lib/dbConnect'); // Connect to MongoDB

const app = express();
app.use(morgan('dev'));
app.use('/users', userRouter);

// Set view engine and views directory
app.set('views', './views');
app.set('view engine', 'ejs');

// Serve static files from 'public' directory
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
    res.render('index', { message: 'Hello From Node.js' });
});

app.get('/contact', (req, res) => {
    res.render('index', { message: 'The Contact Page' });
});

app.get('/about', (req, res) => {
    res.render('index', { message: 'The About Page' });
});

// Handle 404 errors
app.get('*', (req, res) => {
    res.status(404).render('index', { message: 'Not Found' });
});

// Start the server
const PORT = process.env.PORT || 3000; // Use PORT from .env or default to 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});