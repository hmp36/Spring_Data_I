const mongoose = require('mongoose');

const Note = mongoose.model('Note');

class NotesController {
    index(req, res) {
        Note.find({}).sort('-createdAt').exec((err, notes) => {
            if (err) {
                console.log("Find method under index screwed up!")
                res.status(404).json(err);         //res.status(404).json(err); return; will change the response the client gets back.
            }
            return res.json(notes);
        })
    }

    create(req, res) {
        console.log("body", req.body);
        
        Note.create(req.body, (err, note) => {
            if (err) {
                return res.json(err);
            }
            return res.json(note);
        })
    }
}

module.exports = new NotesController();
