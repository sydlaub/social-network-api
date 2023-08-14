const express = require('express');
const mongoose = require('mongoose');
const routes = require('./api_routes');
const app = express();
const PORT = process.env.PORT || 3005;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// import routes
app.use(routes);

// connect to the MONGO DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-media_db');

app.listen(PORT, () =>
console.log(`Server now listening on PORT ${PORT}`)
);