const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://<username>:<password>@cluster0.w14huyy.mongodb.net/"
);
const Player = mongoose.model("Player", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const userexist = await Player.findOne({ email: email });
  if (userexist) {
    res.json({ msg: "user already exists" });
  } else {
    const person = new Player({
      name: username,
      email: email,
      password: password,
    });

    await person.save();
    res.send("done!");
  }
});

app.listen(9000);
