let path = require("path");
let mongoose = require("mongoose");
let UserController = require("../controllers/UserController.js");


module.exports = (app)=>{
    app.post("/register",UserController.register);
    app.post("/login",UserController.login); 
    app.post("/addquestion", UserController.addquestion);
    
    app.get("/logout",UserController.logout);
    app.get("/session",UserController.session);
    app.get("/getAllQuestions", UserController.getAllQuestions);
    app.get("/getAllMyQuestions", UserController.getAllMyQuestions);
    // app.post("/update", users.update);
    // app.post("/delete", users.delete);
   
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./client/LRapp/dist/index.html"));
    });
}
