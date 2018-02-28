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
}


module.exports = new UserController();
    


