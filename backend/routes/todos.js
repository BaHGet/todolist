const express = require("express");
const router = express.Router();
const todos = require("../models/todosSchema");
const user = require("../models/user");

router.post("/", async (req, res) => {
    const data = new todos({
        userName: req.body.userName,
        title: req.body.title,
        description: req.body.description,
        created_at: Date.now(),
    });
    try {
        let exist = await todos.findOne({ title: req.body.title });
        if (exist) {
            return res.status(400).json({ message: "Task already exists" });
        }else{
            const dataToSave = await data.save();
            res.status(200).json(dataToSave);
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router