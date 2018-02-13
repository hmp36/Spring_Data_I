const mongoose = require('mongoose');
var Task = mongoose.model('Task');
class TasksController {
    index(req, res) {
        Task.find({}, function (err, tasks) {
            if (err) {
                console.log('something went wrong');
                return res.json(err);
            }
            console.log('successfully showing every task');
            return res.json(tasks);

        })
    }
    create(req, res) {
        Task.create(req.body, (err, task) => {
            if (err) {
                return res.json(err);
            }
            return res.json(task);
        })
    }
    show(req, res) {
        Task.findById(req.params.id, (err, task) => {
            if (err) {
                return res.json({ error: '404 - Task not found' });
            }
            return res.json(task);
        })
    }
    update(req, res) {
        Task.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, (err, task) => {
            if (err) {
                return res.json({ error: 'What are you doing ? update fail' });
            }
            return res.json(task);
        })
    }
    destroy(req, res) {
        Task.findByIdAndRemove(req.params.id, (err, task) => {
            if (err) {
                return res.json({ error: "do you even lift bro?" });
            }
            return res.json({ success: "you have successfully deleted" });
        })
    }
}

module.exports = new TasksController();