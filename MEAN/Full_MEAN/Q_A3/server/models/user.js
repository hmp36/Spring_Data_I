const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        minlength: [1, "Email must be between 1-255 characters"],
        maxlength: [255, "Email must be between 1-255 characters"],
        validate: {
            validator: function (value) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
            },
            message: "Invalid E-mail format"
        }
    },

    first_name: {
        type: String,
        required: [true, "First Name is required"],
        minlength: [1, "First Name must be between 1-255 characters"],
        maxlength: [255, "First Name must be between 1-255 characters"],
    },

    last_name: {
        type: String,
        required: [true, "Last Name is required"],
        minlength: [1, "Last Name must be between 1-255 characters"],
        maxlength: [255, "Last Name must be between 1-255 characters"],
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be between 8-255 characters"],
        maxlength: [255, "Password must be between 8-255 characters"],
        validate: {
            validator: function (value) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,32}/.test(value);
            },
            message: "Password failed validation, you must have at least 1 number, uppercase"
        }
    },

    password_confirm: {
        type: String,
        required: [true, "Password Confirmation is required"],
        minlength: [8, "Password Confirmation must be between 8-255 characters"],
        maxlength: [255, "Password must be between 8-255 characters"],
        validate: {
            validator: function (value) {
                return value == this.password;
            },
            message: "Password and Password Confirmation must match"
        }
    },
    _question: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,        
        ref: "Question",
    }],
    _answer: [{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: "Answer",
    }],
    
},{ timestamps: true });

UserSchema.methods.hash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}
UserSchema.methods.match = function(formPass, password){
    return bcrypt.compareSync(formPass, password);
}
UserSchema.pre("save", function(done){
    this.password = this.hash(this.password);
    this.password_confirm = undefined;
    done()
})


const User = mongoose.model("User", UserSchema);