var mongoose = require('mongoose');
var MonSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 1 },
    age: { type: Number, min: 1 },
}, { timestamps: true });
var Mongoose = mongoose.model('Mongoose', MonSchema);