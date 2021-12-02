const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded using express's built-in body-parser implementation
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'pug');
app.set('views', './views');

// set site root folder?
app.use(express.static('public'));

// let cors = require('cors') // might want to delete this later
//app.use(cors()) // Use this after the variable declaration

module.exports = app;

let appRoutes = require('./routes/minorLogRoutes'); //importing route
appRoutes(app); //register the route (Send app to the appRoutes file)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    console.log('API server started on: ' + port);
});
