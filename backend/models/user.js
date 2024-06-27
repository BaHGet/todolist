const mongoose = require("mongoose");
const dayjs = require('dayjs')
var timezone = require("dayjs/plugin/timezone");
var utc = require("dayjs/plugin/utc");

dayjs.extend(utc)
dayjs.extend(timezone)
const now = dayjs.tz(dayjs(), dayjs.tz.guess()).format('YYYY-MM-DD HH:mm:ss ')

const userSchema = new mongoose.Schema({
    "username": {
        type: String,
        required: true,
    },
    "email": {
        type: String,
        required: true,
    },
    "password": {
        type: String,
        required: true,
    },
    "created_at": {
        type: Date,
        default : now,
        required: false,
    },
});

module.exports = mongoose.model("users", userSchema)