var express = require("express");
var path = require("path");
var session = require('express-session');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/message_board')
var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1
    },
    text: {
        type: String,
        required: true
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
}, {
    timestamps: true
});

var CommentSchema = new mongoose.Schema({
    _post: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    name: {
        type: String,
        required: true,
        minlength: 1
    },
    text: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

app.use(session({
    secret: 'Invictus'
}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    Post.find({})
        .populate("comments")
        .exec(function (err, posts) {
            res.render("index", {
                posts: posts
            })
        })
})
app.post('/new', function (req, res) {
    var post = new Post(req.body);
    console.log(post);
    post.save(function (err) {
        if (err) {
            console.log('ops something went wrong');
            res.redirect('/');
        } else {
            console.log('successfully added a Post');
            res.redirect('/');
        }
    })

})

app.post('/new/comment/:id', function (req, res) {
    Post.findOne({
        _id: req.params.id
    }, function (err, post) {
        var comment = new Comment(req.body);
        comment._post = post._id;
        post.comments.push(comment);
        comment.save(function (err) {
            post.save(function (err) {
                if (err) {
                    console.log('ERROR');
                } else {
                    console.log('comment added')
                    res.redirect('/');
                }
            });
        });
    });
});

app.listen(8000, function () {
    console.log("listing on port 8000");
});