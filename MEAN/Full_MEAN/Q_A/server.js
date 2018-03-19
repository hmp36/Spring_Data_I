//*** Server.js (should not change besides Angular folder path name)
let express = require("express");
let bParse = require("body-parser");
let mongoose = require("mongoose");
let cookie = require("cookie");
let bcrypt = require("bcrypt");
let path = require("path");
let app = express();
let session = require("express-session");
let port = 8000;
//Change this to the Angular path
app.use(session({secret:"invictus"}))
app.use(express.static(path.join(__dirname, '/client/LRapp/dist')));
app.use(bParse.json());
app.use(bParse.urlencoded({
  extended: true
}));
app.listen(port, function () {
  console.log("listening on port " + port);
});

require("./server/config/mongoose.js");
require("./server/config/Routes.js")(app);
//*** End Server.js