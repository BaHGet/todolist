const express = require("express");
const router = express.Router();
const user = require("../models/user");
const { Hashing, compareing } = require("../utilities/HashingAlgo");


router.get("/", async (req, res) => {
    const username = req.body.username;
    try {
        const user = await user.findOne({ username: username });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        const data = {
            username: user.username,
            email: user.email,
            created_at: user.created_at,
        };
        res.send(data);
    } catch (error) {
        res.send(error);
    }
});

router.post("/", async (req, res) => {
    if(req.body.password){
        const data = new user({
            username: req.body.username,
            email: req.body.email,
            password: await hashPassword(req.body.password),
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