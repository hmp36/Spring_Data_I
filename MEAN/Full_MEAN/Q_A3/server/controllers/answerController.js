const mongoose = require('mongoose');
const Question = mongoose.model('Question');
const Answer = mongoose.model('Answer');
const User = mongoose.model('User');

module.exports = {
    showAll: (req, res) => {
        Answer.find({}, (err, answers) => {
            if (err) {
                return res.json(err);
            }
            return res.json(answers);
        })
    },
    create: (req, res) => {
        req.body._user = req.session.user_id;
        req.body._question = req.params.id;
        var newAnswer = new Answer(req.body);
        Question.findById(req.params.id, (err, question) => {
            Answer.create(newAnswer, (err, answer) => {
                if(err){
                    return res.json(err);
                }else{
                    question._answer.push(newAnswer);
                    question.save((err, answer) => {
                        if (err) {
                            return res.json(err);
                        }
                    })
                    return (res.json(answer))
                }
            })
        })
    },
    like: (req, res) => {
        Answer.like(req.params.id, req.session.user_id, (err) =>{
            if(err){
                console.log(err);
            }
        })
        return res.json({like: "you just like this answer"})
    }
}
