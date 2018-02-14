var express = require("express");
var path = require("path");
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + "/client/static"));
app.use(session({
    secret: 'here is a very sneaky, secret key'
}));


app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8001, () => {
    console.log('Online (Port 8001)');
})