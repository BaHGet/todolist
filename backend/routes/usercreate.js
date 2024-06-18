const express = require("express");
const router = express.Router();
const user = require("../models/user");

router.post("/", async (req, res) => {
    const data = new user({
        username: req.body.username,
        email: req.body.email,
        password_hash: req.body.password_hash,
        created_at: req.body.created_at,
    });
    try {
        let exist = await user.findOne({ email: req.body.email }) && await user.findOne({ username: req.body.username });
        if (exist) {
            return res.status(400).json({ message: "User already exists" });
        }else {
            const dataToSave = await data.save();
            return res.status(200).json(dataToSave);
        }
    }
    catch (error) {
        return res.status(400).json({ message: error.message,});
    }
});

module.exports = router;