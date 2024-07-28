const express = require("express");

const serverless = require("serverless-http");
const { hashing } = require("./HashingAlgo");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "hi" });
});

app.post("/hash", async (req, res) => {
  const { password } = req.body;
  try {
   if(password){
    const { hashedPassword, salt } = await hashing(password);
    res.json({ hashedPassword, salt });
   }else{
    res.json({ error: "password is required" });
   }
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.listen(3000, () => console.log("server is running on port 3000"));

module.exports.handler = serverless(app);
