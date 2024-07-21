const mongoose = require("mongoose");

const todoschema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: false },
    completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("todo", todoschema);
