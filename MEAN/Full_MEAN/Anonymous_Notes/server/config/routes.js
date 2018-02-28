const Notes = require('../controllers/notes.js');
const path = require('path');

module.exports = function (app) {
    app.get('/notes', Notes.index);
    app.post('/notes', Notes.create);
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./dist/index.html'));
    });
}