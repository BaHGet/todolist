const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema({
    "userName": {
        type: String,
        required: true,
    },
    "title": {
        type: String,
        required: true,
    },
    "description": {
        type: String,
        required: true,
    },
    "created_at": {
        type: Date,
        value: Date.now(),
        required: false,
    },
});



module.exports = mongoose.model("todos", todosSchema)

/*
        "tasks": [
            {
                "title": String,
                // "description": String,
                // "due_date": Date,
                // "priority": String,
                // "status": String,
                "created_at": Date.now()
            }
        ] 
    */