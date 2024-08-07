const mongoose = require("mongoose");
const dayjs = require('dayjs')
var timezone = require("dayjs/plugin/timezone");
var utc = require("dayjs/plugin/utc");

dayjs.extend(utc)
dayjs.extend(timezone)
let now = dayjs.tz(dayjs(), dayjs.tz.guess()).format('YYYY-MM-DD HH:mm:ss')

const todosSchema = new mongoose.Schema({
    "username": {
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
    "priority": {
        type: String,
        required: true,
    },
    "created_at": {
        type: String,
        default : now,
        required: false,
    },
    "due_date":{
        type: String,
        required: true,
    }
});



module.exports = mongoose.model("todos", todosSchema)