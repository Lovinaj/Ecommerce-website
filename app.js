const path = require('path');
const express = require('express');


// Declaring necessary variables.
const PORT = 4000;
const app = express();

const errorControllers = require('./controllers/error')

const mongoConnect = require('./utils/database').mongoConnect;

// Setting the ejs engine
app.set('view engine', 'ejs');
app.set('views', 'views')

//Requiring the routes from the routes folder
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');

// Middleware to parse URL-encoded data (form data)
app.use(express.urlencoded({ extended:false}));

//Serving static files
app.use(express.static(path.join(__dirname, 'public'))); 

// Middleware to parse JSON data
app.use(express.json());

app.use((res, req, next) => {
    // user.findById(1)
    // .then (user => {
    //     req.user = user;
    //     next();
    // })
    // .catch (err => {
    //     console.log(err);
    // })
    next();
})
 

//Routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// 404 page

app.use(errorControllers.get404);

mongoConnect(()=>{
    app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
})
})



