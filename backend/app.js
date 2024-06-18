const express = require("express");
const app = express();
const { connect, connection } = require("mongoose");
require('dotenv').config() // to read .env file

connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.had7mus.mongodb.net/todolist`)

const db = connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());
const userRouter = require("./routes/usercreate");
app.use("/user", userRouter);

const todosRouter = require("./routes/todos");
app.use("/todos", todosRouter);
app.listen(3003, () => {
    console.log(`Example app listening on port ${3003}`)
})