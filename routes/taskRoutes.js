const express = require('express');
const router = express.Router();
const Task = require('../model/taskModel');

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
        if (!req.body.name) return res.status(400).json({"Validation Error":"name is required"});
        if (!req.body.description) return res.status(400).send({"Validation Error":"description is required"});
        if (!req.body.completed) return res.status(400).send({"Validation Error":"completed is required"});
        
        const task ={
            name: req.body.name,
            description: req.body.description,
            completed: req.body.completed
        }

        const newTask = new Task(task)
        await newTask.save()
        res.status(200).json({
            massage: "Todo created succussfuly"
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({Error: "not found"})
    }
})

router.put("/tasks/:id", async (req, res)=>{
    // TODO: use query, add validation,  add error handling
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
    // TODO: use query, add validation,  add error handling
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