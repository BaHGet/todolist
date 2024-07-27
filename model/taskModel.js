const { request } = require("express");
const mongoose = require("mongoose");

const todoschema = new mongoose.Schema({
    username: { type: String, required: true },
    title: {type: String, required: true},
    description: { type: String, required: false },
    priority: { type: String, required: true },
    created_at: {type: String, required: true},
    completed: { type: Boolean, required: false },
    due_date: { type: String,  required: true}
});

module.exports = mongoose.model("todo", todoschema);
