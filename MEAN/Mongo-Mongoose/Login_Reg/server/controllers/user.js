var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt');


module.exports = {
    index: (req, res) => {
        if (req.session.errors) {
            var errors = [];
            for (let error in req.session.errors.errors) {
                errors.push(req.session.errors.errors[error].message);
            }
            errors = errors.reverse();
            console.log(errors);
            req.session.destroy();
        }
        return res.render('index', { errors });
    },

    register: (req, res) => {
        let body = req.body;
        if (body.password != body.confirm_password) {

        }
        let newUser = new User(body);
        newUser.save((err) => {
            if (err) {
                req.session.errors = err;
                console.log(req.session.errors);
                return res.redirect('/');
            }
            return res.redirect('/success');
        })
    },

    login: (req, res) => {
        let body = req.body;
        let user = User.find({ email: body.email }, (err, user) => {
            if (err) {
                req.session.errors = err;
                return res.redirect('/');
            }
            if (user.methods.match(req.body.password, user.password)) {
                return res.redirect('/success');
            } else {
                req.session.errors.errors = "Those credentials don't match our database, I'm afraid."
                return res.redirect('/');
            }

        })
    },

    success: (req, res) => {
        return res.render('success');
    }
}
