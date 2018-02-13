var mongoose = require('mongoose');
var PersonSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 1 }
})
var Person = mongoose.model('Person', PersonSchema);
