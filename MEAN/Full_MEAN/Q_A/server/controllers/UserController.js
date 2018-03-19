let User = require("mongoose").model("User");
let session = require("express-session");

class UserController{
    register(req,res){
        console.log( req.body );
        console.log("whatever");

        User.find({email:req.body.email},(err,user)=>{
            if (user){
                let user = new User(req.body);
                user.save((err)=>{
                    if(err){
                        return res.json({errors:user.errors});
                    }else{
                        req.session.user_id = user.id;
                        return res.json(user);
                    }
                });
            }else {
                return res.json({errors:"A user with this email aready exists"});
            }
        });
    }
    login(req,res){
        User.findOne({email:req.body.email},(err,user)=>{
                   
            if(user){
                if (user.password == req.body.password) {
                    req.session.user_id = user.id;
                    return res.json(user);
                }else{
                    return res.json({ errors: "Invalid Credentials." })
                }
            }else{
                return res.json({errors: "No user exists with this email." });
                                                         
            }            
        });
    }

    logout(req,res){
        req.session.user_id = null;
        return res.json(false);
    }   

    session(req, res){
        if(req.session.user_id){
            User.findOne({_id:req.session.user_id},(err,user)=>{
                if(err){
                    return res.json({errors:"Failed to validate session"});
                }else{    
                    return res.json(user);
                }   
            });
        }else{    
            return res.json({errors:"Invalid Session"});    
        }
    }
    addquestion(req, res) {
    console.log('i am inside question db');
    console.log(req.session.user);
    console.log(req.session.user._id);
    User.findOne({ _id: req.session.user._id })
        .then((user) => {
    let myuser = user
    console.log(user)
    let new_question = new question(req.body);
    new_question.userid = req.session.user._id;
    console.log(req.session.user);
    console.log('user questions: ', myuser.questions);
    myuser.questions.push(new_question);
    new_question.save()
        .then(() => { myuser.save(); console.log('question created'); res.json(true) })
        .catch(err => { res.status(400); res.json(false) })
})
        .catch (err => {
    res.status(400)
    res.json(false)

});
    }


getAllQuestions (req, res) {
    console.log('i am inside get all questions');
    question.find({})
        .then(questions => {
            var userid = req.session.user._id
            res.json({ questions: questions, userid: userid })
        })
        .catch(err => { res.json(400); res.json(false) })
}


        getAllMyQuestions (req, res) {
            console.log('i am inside MY question');
            User.findOne({ _id: req.session.user._id }).populate('questions').exec()
                .then((user) => { let myquestions = user.questions; res.json(myquestions) })
                .catch((err) => { res.status(400), res.json(false) })

        }
    }








module.exports = new UserController();
    


          

