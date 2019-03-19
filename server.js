const express = require("express");
const ejsLayout = require("express-ejs-layouts");
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session')

const loginRoute = require("./routes/login");
const registerRoute = require("./routes/register");
const config = require('./config/config')
const googleRoute = require('./routes/google');


require('./config/passport')

mongoose.connect(config.mongoURL).then(() => {
    console.log(`connected....`);

}).then(err => {
    throw err;
})

const app = express();

app.use(ejsLayout);
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname + "/public")));
app.use(bodyParser.urlencoded({
    extended: false
}))

//session
app.use(session({
    secret: 'mysecret',
    resave: true,
    saveUninitialized: true,
}))
//connect flash
app.use(flash())

app.use((req, res, next) => {
    res.locals.sucess_msg = req.flash('success_msg');
    next();
})


app.use(loginRoute);
app.use(registerRoute);
app.use(googleRoute)

const PORT = process.env.PORT || 5800;

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});