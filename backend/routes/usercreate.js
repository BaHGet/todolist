const express = require("express");
const router = express.Router();
const user = require("../models/user");
const { Hashing, compareing } = require("../utilities/HashingAlgo");

/* 
user:{
    username: String,
    email: String,
    password: String,
    created_at: Date
} 
*/


router.get("/", async (req, res) => {
    const username = req.query.username;
    try {
        const User = await user.findOne({ username: username });
        if (!User) {
            return res.status(400).json({ message: "User not found" });
        }
        if(!(await compareing(req.query.password, User.password))){
            return res.status(400).json({ message: "Wrong Password" });
        }
        else{
            return res.status(200).json({username: User.username, email: User.email});
        }
    } catch (error) {
        res.status(400).send({message: error.message});
    }
});

router.post("/", async (req, res) => {
    if(req.body.password){
        const data = new user({
            username: req.body.username,
            email: req.body.email,
            password: await Hashing(req.body.password),
            created_at: req.body.created_at,
        });
        try {
            let exist = await user.findOne({ email: req.body.email }) && await user.findOne({ username: req.body.username });
            if (exist) {
                res.status(400).json({ message: "User already exists" });
            }else {
                const dataToSave = await data.save();
                return res.status(200).json({message: "User created"});
            }
        }
        catch (error) {
            return res.status(400).json({ message: error.message,});
        }
    }
});

module.exports = router;