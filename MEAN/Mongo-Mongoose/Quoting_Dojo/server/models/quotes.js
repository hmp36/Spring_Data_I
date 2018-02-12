var mongoose = require('mongoose');
var QuoteSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 1 },
    message: { type: String, required: true, minlength: 1 },
})
var Quote = mongoose.model('Quote', QuoteSchema);