const mongoose = require('mongoose')

const taskschema = new mongoose.Schema({
    name: {type: String, required: true},
    describetion: {type: String, required: false},
    completed: {type: Boolean, default: false}
})

module.exports = mongoose.model("Task", taskschema)