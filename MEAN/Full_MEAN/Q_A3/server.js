const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const port = 8001;
const app = express();

app.use(bodyParser.json());
app.use(session({ secret: "realMadrid"}));
app.use(express.static(__dirname + '/client/dist'));

require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(port, () => {
    console.log(`hey, you are in port ${port}`)
});