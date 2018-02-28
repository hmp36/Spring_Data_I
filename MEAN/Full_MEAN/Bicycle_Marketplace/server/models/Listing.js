let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

mongoose.model('Listing',new mongoose.Schema({
	title:{type:String,required:true,minlength:1,maxlength:255},
	description:{type:String,required:true,minlength:1,maxlength:255},
	price:{type:Number,required:true},
	location:{type:String,required:true,minlength:1,maxlength:255},
	src:{type:String,required:true,minlength:1,maxlength:1024},

	user:{type:ObjectId,ref:"User"}
},{timestamps:true}));