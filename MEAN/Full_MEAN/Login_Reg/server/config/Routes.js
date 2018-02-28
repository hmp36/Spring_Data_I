let path = require("path");
let mongoose = require("mongoose");
let UserController = require("../controllers/UserController.js");


module.exports = (app)=>{
    app.post("/register",UserController.register);
    app.post("/login",UserController.login); 
   
    app.get("/login",UserController.login);
    app.get("/session",UserController.session);
    
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./client/LRapp/dist/index.html"))
    });
}
