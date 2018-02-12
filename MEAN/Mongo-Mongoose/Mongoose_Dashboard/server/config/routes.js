var mongoose = require('../controllers/mongoose.js');
module.exports = function (app) {
    app.get('/', function (req, res) {
        mongoose.show(req, res);
    })
    app.post('/new', function (req, res) {
        mongoose.create(req, res);
    })
    app.get('/mongooses/delete/:id', function (req, res) {
        mongoose.deleteById(req, res);
    })
    app.get('/mongooses/:id', function (req, res) {
        mongoose.showById(req, res);
    })
    app.get('/mongooses/edit/:id', function (req, res) {
        mongoose.editById(req, res);
    })

    app.post('/mongooses/process/:id', function (req, res) {
        mongoose.saveEdited(req, res);
    })

}