const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const port = 5000;
const app = express();

app.use(bodyParser.json());
app.use(session({ secret: "jonathan_is_awesome" }));
app.use(express.static(__dirname + '/AnonApp/dist'));

require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(port, () => {
  console.log(`hey, you are in port ${port}`)
});