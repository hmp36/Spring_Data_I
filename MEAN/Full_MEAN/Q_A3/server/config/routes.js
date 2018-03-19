const User = require("../controllers/userContrtoller");
const Question = require("../controllers/questionController");
const Answer = require("../controllers/answerController");
const path = require("path");

module.exports = (app) => {
    // User
    app.post("/user/create", User.create);
    app.post("/user/login", User.login);
    app.get("/user", User.session);
    app.get("/users", User.show);
    app.delete("/user/logout", User.logout);

    // Question
    app.post("/question/create", Question.create);
    app.get("/questions", Question.show);
    app.get("/question/:id", Question.findOne);
    app.get("/question/answer/:id", Question.findOneWithAnswers);

    // Answer
    app.post("/answer/create/:id", Answer.create);
    app.get("/answers", Answer.showAll);
    app.post("/answer/like/:id", Answer.like);

    // talk to the front end
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./client/dist/index.html"));
    })
}