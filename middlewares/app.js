const express = require("express")
let app = express()

let postRouter = require("../routes/post.route")
let userRouter = require("../routes/user.route")

app.use(express.json())
app.use("/posts", postRouter)
app.use("/users", userRouter)


app.get("*", (req, res, next) => {
    res.send("Ishlayapti");
});

module.exports = app