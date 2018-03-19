//*** Sample User.js in /server/models/
let mongoose = require("mongoose");
let ObjectId = mongoose.Schema.Types.ObjectId;

let User = mongoose.model("User", new mongoose.Schema({
    firstName: { type: String, required:true,minlength:1,maxlength:255},
    lastName: { type: String, required: true, minlength: 1, maxlength: 255 },
    email: { type: String, required: true, minlength: 1, maxlength: 255 },
    password: { type: String, required: true, minlength: 1, maxlength: 255},
    confirm: { type: String },
    bicycles: [{ type: ObjectId, ref: "Bicycle" }]
}, { timestamps: true }));
