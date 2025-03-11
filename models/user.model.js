const { default: mongoose } = require("mongoose");

const userShceme = new mongoose.Schema({
    name : {type: String, required: true},
    email : {type: String, required :true, unique: true},
    createdAt: {type: Date , default: Date.now}
})

let user = mongoose.model("User", userShceme)

module.exports = user