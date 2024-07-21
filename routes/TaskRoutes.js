const express = require('express');
const router = express.Router();
const Task = require('../model/task');

router.get("/tasks", async (req, res)=> {
    try {
        const tasks = await Task.find()
        res.status(200).json({tasks})
    } catch (error) {
        console.log(error)
        res.status(404).json({Error: error})
    }
})

router.post("/tasks", async (req, res)=>{
    try {
        const task = new Task(req.body)
        await task.save()
        res.status(200).json({
            massage: "add succussfuly",
            task
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({Error: error})
    }
})

router.put("/tasks/:id", async (req, res)=>{
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(id, req.body, {new: true})
        res.status(200).json({
            massage: "update succussfuly",
            task
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({Error: error})
    }
})

router.delete("tasks/:id", async (req, res)=>{
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id);
        res.status(200).json({
            massage: "deleted succussfuly",
            task
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({Error: error})
    }
})

module.exports = router;