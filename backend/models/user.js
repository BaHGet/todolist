const mongoose = require("mongoose");
const dayjs = require('dayjs')
var timezone = require("dayjs/plugin/timezone");
var utc = require("dayjs/plugin/utc");

dayjs.extend(utc)
dayjs.extend(timezone)
let now = dayjs.tz(dayjs(), dayjs.tz.guess()).format('YYYY-MM-DD HH:mm:ss Z')

const userSchema = new mongoose.Schema({
    "userName": {
        type: String,
        required: true,
    },
    "email": {
        type: String,
        required: true,
    },
    "password_hash": {
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