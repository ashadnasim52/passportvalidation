const express = require("express");
const ejsLayout = require("express-ejs-layouts");
const path = require("path");
const bodyParser = require('body-parser')

const loginRoute = require("./routes/login");
const registerRoute = require("./routes/register");

const app = express();

app.use(ejsLayout);
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname + "/public")));
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(loginRoute);
app.use(registerRoute);

const PORT = process.env.PORT || 5800;

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});