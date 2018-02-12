var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');
module.exports = {
    show: function (req, res) {
        Quote.find({}, function (err, quotes) {
            res.render("quotes", { quotes: quotes });
        })
    },
    create: function (req, res) {
        var quote = new Quote(req.body);
        quote.save(function (err) {
            if (err) {
                console.log('something went wrong');
                res.redirect('/');

            } else {
                console.log('successfully added a user!');
                res.redirect('/quote');
            }
        })
    }
} 