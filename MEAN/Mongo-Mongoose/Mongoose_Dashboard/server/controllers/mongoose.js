var mongoose = require('mongoose');
var Mongoose = mongoose.model('Mongoose');
module.exports = {
    show: function (req, res) {
        Mongoose.find({}, function (err, mongooses) {
            res.render("index", { mongooses: mongooses });
        })
    },
    create: function (req, res) {
        var mongoose = new Mongoose(req.body);
        mongoose.save(function (err) {
            if (err) {
                console.log('somehing wnet wrong');
                res.redirect('/');
            } else {
                console.log('successfully added a mongoose');
                res.redirect('/');
            }
        })
    },
    deleteById: function (req, res) {
        Mongoose.findByIdAndRemove(req.params.id, function (err) {
            res.redirect('/');
        });
    },
    showById: function (req, res) {
        Mongoose.findById(req.params.id, function (err, mongoose) {
            res.render('info', { mongoose: mongoose });
        });
    },
    editById: function (req, res) {
        Mongoose.findById(req.params.id, function (err, mongoose) {
            res.render('edit', { mongoose: mongoose });
        });
    },
    saveEdited: function (req, res) {
        Mongoose.findOneAndUpdate({ _id: req.params.id }, req.body, { upsert: false }, function (err, mongoose) {
            if (err) return handleError(err);
            console.log(mongoose);
            res.redirect('/');
        })
    }

}
