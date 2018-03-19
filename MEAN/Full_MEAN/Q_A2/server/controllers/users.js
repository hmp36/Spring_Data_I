var mongoose = require("mongoose")
var User = mongoose.model("User")


module.exports = (function(){
	return {
		login_user: function(req, res) { //this will check and see if the user already exists in db
			User.findOne({username: req.body.username}, function(err, user){
				if(err) {
					console.log("err in finding user")
					console.log(err)
				} else if(user) {
					console.log('in existing user')
					res.json(user)
				} else {
					console.log("it's a new user, creating user")
					var newU = new User()
					newU.username = req.body.username
					newU.save(function(err, newuser){
						if(err) {
							console.log(err)
						} else {
							res.json(newuser)
						}
					})
				}
				console.log(user)
			})
		},
		get_user_obj: function(req, res) {
			console.log(req.body)
			User.findOne({username: req.body.username}, function(err, user){
				if(err) {
					console.log(err)
				} else {
					res.json(user)
				}
			})
		}
	}
})()