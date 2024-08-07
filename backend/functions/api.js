require('dotenv').config()
const cors = require("cors")
const express = require("express");
const serverless = require("serverless-http");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
    `mongodb+srv://abosama150:${process.env.PASSWORD}@cluster0.had7mus.mongodb.net/todolist`
);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

app.use(
    cors({
        origin: "*", 
    })
);

const router = express.Router();
router.options("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    return res.status(200).json({message: "OK"});
});


mongoose.pluralize(null);

const userRouter = require("../routes/usercreate");
const todosRouter = require("../routes/todos");

app.use("/.netlify/functions/api/user", userRouter);
app.use("/.netlify/functions/api/todos", todosRouter);

module.exports.handler = serverless(app);