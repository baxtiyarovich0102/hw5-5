const express = require("express");
let app = express();
let path = require("path")

let postRouter = require("../routes/post.route");
let userRouter = require("../routes/user.route");

app.use('/uploads', express.static('./uploads'));
app.use(express.json());
app.use(express.urlencoded(true));
app.use("/api/posts", postRouter);
app.use("/api/users", userRouter);

app.get("*", (req, res, next) => {
  res.send("Ishlayapti");
});

module.exports = app;
