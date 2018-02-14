var mongoose = require('mongoose');
var User = mongoose.model('User');
var users = require('../controllers/user.js');

module.exports = (app) => {
    app.get('/', (req, res) => {
        users.index(req, res);
    })

    app.get('/success', (req, res) => {
        users.success(req, res);
    })

    app.post('/register', (req, res) => {
        users.register(req, res);
    })

    app.post('/login', (req, res) => {
        users.login(req, res);
    })
}