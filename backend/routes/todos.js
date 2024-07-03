const express = require("express");
const router = express.Router();
const todos = require("../models/todosSchema");
const user = require("../models/user");

router.post("/", async (req, res) => {
    const data = new todos({
        username: req.body.username,
        title: req.body.title,
        description: req.body.description,
        created_at: req.body.created_at,
    });
    try {
        let exist = await user.findOne({ username: req.body.username });
        if (exist != null) {
                const dataToSave = await data.save();
                return res.status(200).json({message: "Todo created",dataToSave});
        }else{
            return res.status(400).json({ message: "User Not Found" });
        }
    }
    catch (error) {
        return res.status(400).json({ message: error.message});
    }
});

router.get("/", async (req, res) => {
    const username = req.query.username;
    try {
        const UserTodos = await todos.find({ username: username.toLowerCase() });
        if (!UserTodos) {
            return res.status(400).json({ message: "User not found" });
        }
        return res.status(200).json(UserTodos);
    } catch (error) {
        res.status(400).send({message: error.message});
    }
});
module.exports = router