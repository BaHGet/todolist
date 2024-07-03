const express = require("express");
const router = express.Router();
const todos = require("../models/todosSchema");
const user = require("../models/user");


router.options("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.sendStatus(200);
});

router.post("/", async (req, res) => {
    const data = new todos({
        username: req.body.username,
        title: req.body.title,
        description: req.body.description,
        priority: req.body.priority
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
    let username = req.query.username || '';
    try {
        const UserTodos = await todos.find({ username: username.toLowerCase()});
        if (!UserTodos) {
            return res.status(400).json({ message: "User not found" });
        }
        return res.status(200).json(UserTodos);
    } catch (error) {
        res.status(400).send({message: error.message});
    }
});

router.put("/", async (req, res) => {
    
    try {
        console.log(req.body)
        let exist = await todos.findOne({ username: req.body.username.toLowerCase() });
        if (exist != null) {
            let todo = await todos.findOne({ username: req.body.username, title: req.body.title });
            if (todo) {
                todo.title = req.body.newTitle
                todo.description = req.body.newdDescription
                todo.priority = req.body.newPriority
                const dataToSave = await todo.save();
                return res.status(200).json({message: "Todo updated",dataToSave});
            }else{
                return res.status(400).json({ message: "Todo Not Found" });
            }
        }else{
            return res.status(400).json({ message: "User Not Found" });
        }
    }
    catch (error) {
        return res.status(400).json({ message: error.message});
    }
});

router.delete("/", async (req, res) => {
    const data = new todos({
        username: req.body.username,
        title: req.body.title
    });
    try {
        let exist = await user.findOne({ username: req.body.username });
        if (exist != null) {
            let todo = await todos.findOne({ username: req.body.username, title: req.body.title });
            if (todo) {
                const dataToSave = await todo.deleteOne();
                return res.status(200).json({message: "Todo deleted",dataToSave});
            }else{
                return res.status(400).json({ message: "Todo Not Found" });
            }
        }else{
            return res.status(400).json({ message: "User Not Found" });
        }
    }
    catch (error) {
        return res.status(400).json({ message: error.message}); 
    }
});

module.exports = router