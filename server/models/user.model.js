const mongoose = require("mongoose");

// Schema to store users
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required"]
    },
    address: {
        type: String,
        required: [true, "Address is required"]
    },
    city: {
        type: String,
        required: [true, "City is required"]
    },
    userState: {
        type: String,
        required: [true, "State is required"]
    },
    email: {
        // TO-DO
    },
    password: {
        // TO-DO
    }
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);
module.exports = User;