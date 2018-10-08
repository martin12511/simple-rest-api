const express = require('express');
const app = express();

// Load routes
const productsRoutes = require('./api/routes/products');

//app.use() // Handle middleware
// uses the routes we acquired above.
app.use('/products', productsRoutes);

module.exports = app;