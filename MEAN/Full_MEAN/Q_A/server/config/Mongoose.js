//*** Mongoose.js (should not change besides database name)
let mongoose = require("mongoose");
let fs = require("fs");
let path = require("path");
let modelPath = path.join(__dirname, "./../models");
//Connect to your database here
mongoose.connect("mongodb://localhost/MEANtest1");
mongoose.Promise = global.Promise;

fs.readdirSync(modelPath).forEach(function (file) {
    if (file.indexOf(".js") >= 0) {
        require(modelPath + "/" + file);
    }
});
//*** End mongoose.js