const mongoose = require('mongoose');
const Question = mongoose.model('Question');
const Answer = mongoose.model('Answer');
const User = mongoose.model('User');

module.exports = {
    show: (req, res) => {
        Question.find({}, (err, questions) => {
            if(err){
                return res.json(err);
            }
            return res.json(questions);
        })
    },
   
    create: (req, res) => {
        req.body._user = req.session.user_id       
        var newQuestion = new Question(req.body);
        Question.create(newQuestion, (err, question) => {
            if(err){
                return res.json(err);
            }
            return res.json(question);
        })  
    },
    findOne: (req, res) => {
        Question.findById(req.params.id, (err, question) => {
            if(err){
                return res.json(err)
            }
            console.log(question);
            return res.json(question);
        })
    },
    findOneWithAnswers: (req, res) => {
        Question.findById(req.params.id).populate({path: "_answer", model:"Answer"}).exec((err, question)=>{
            if(err){
                return res.json(err)
            }
            return res.json(question)
        })
    }
}
