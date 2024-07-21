const express = require("express");
const serverless = require("serverless-http");
const mongoose = require("mongoose");
require("dotenv").config();
const dbPassword = process.env.DB_PASSWORD;
const app = express();

app.use(express.json());

// mongoose conection
mongoose.connect(
  `mongodb+srv://mahad10taha:${dbPassword}@cluster0.jmtourk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/todo_list`
);
const db = mongoose.connection;
db.on("error", () => {
  console.log("error connection");
});
db.once("open", () => {
  console.log("connection succussfuly");
});

const todoRoute = require("../routes/todoRoutes");
app.use(todoRoute);

// liston port
const port = 4444;
app.listen(port, () => console.log(`start server on port ${port}`));

module.exports.handler = serverless(app);
