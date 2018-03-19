const mongoose = require("mongoose");
const User = mongoose.model("User");
const Question = mongoose.model('Question');
const Answer = mongoose.model('Answer');

module.exports = {
    create: (req, res) => {
        User.find({ email: req.body.email },(err, users) => {
            if (users.length > 0){
                console.log("********-1")
                return res.json({'errors': "that user already exists"});
            }else{
                User.create(req.body, (err, newUser) => {
                    if(err){
                        console.log("********-2")
                        return res.json(err);
                    }
                    console.log("********-3")
                    req.session.user_id = newUser._id;
                    console.log("********-4")
                    return res.json(newUser);
                })
            }
        })
    },
    login: (req, res) => {
        console.log(req.body)
        if(req.body.email != null && req.body.password != null ){
            User.findOne({ email: req.body.email}, (err, user) => {
                if(user == null){
                    return res.json({'errors':'Email not found'})
                }else{
                    if(User.schema.methods.match(req.body.password, user.password)){
                        req.session.user_id = user._id;
                        return res.json(user);
                    } else{
                        return res.json({'errors':'Invalid password'});
                    }
                }
            })
        }else{
            return res.json({ 'errors': 'No login information entered' })
        }
    },
    session: (req, res) => {
        User.findById(req.session.user_id, (err, user) => {
            if(err){
                return res.json(err)
            }
            return res.json(user);
        })
    },
    show: (req, res) => {
        User.find({}, (err, users) => {
            if (err) {
                return res.json(err)
            }
            return res.json(users);
        })
    },
    logout: (req, res) => {
        delete req.session.user_id;
        return res.json({"message": "you have logout"})
    },
}