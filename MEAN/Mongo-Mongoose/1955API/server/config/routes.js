var person = require('../controllers/person.js');
module.exports = function (app) {
    app.get('/', function (req, res) {
        person.show(req, res);
    })
    app.get('/:name', function (req, res) {
        person.showByName(req, res);
    })
    app.get('/new/:name', function (req, res) {
        console.log("******1")
        person.create(req, res);
        console.log("******1")
    })
    app.get('/remove/:name', function (req, res) {
        person.deleteByName(req, res);
    })

}