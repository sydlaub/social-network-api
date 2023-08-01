const express = require('express');
const mongoose = require('mongoose');
const routes = require("./api_routes");
const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

// connect to the MONGO DB

app.listen(PORT, () =>
console.log(`Server now listening on PORT ${PORT}`)
);