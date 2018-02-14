const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email address is required"],
        validate: {
            validator: (address) => { return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(address); },
            message: "The email address you entered was not valid."
        },
    },
    first_name: {
        type: String,
        required: [true, "A first name is required for registration."],
        minlength: 2
    },
    last_name: {
        type: String,
        required: [true, "A last name is required for registration."],
        minlength: 2
    },
    password: {
        type: String,
        required: [true, "You must supply a password"],
        minlength: [8, "The password you provide must be at least 8 characters long."]
    },
    confirm_password: {
        type: String,
        required: true,
        minlength: 8,
        validate: {
            validator: passwordConfirmation,
            message: "Those two passwords don't match!",
        }
    },
    birthdate: { type: String, required: [true, 'Please provide a valid birthdate.'] },
}, { timestamps: true });

function passwordConfirmation(value) {
    return this.password === value;
}

UserSchema.methods.hash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}

UserSchema.methods.match = function (formPass, password) {
    return bcrypt.compareSync(formPass, password);
}

UserSchema.pre("save", function (done) {
    this.password = this.hash(this.password);
    this.password_confirm = undefined;
    done();
})
module.exports = mongoose.model('User', UserSchema);
