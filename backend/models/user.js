const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password_hash: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        value: Date.now(),
        required: false,
    },
});

module.exports = mongoose.model("user", userSchema)