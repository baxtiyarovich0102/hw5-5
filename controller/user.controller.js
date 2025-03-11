const User = require("../models/user.model")


let findAllUser = async (req, res, next) => {
    let users = await User.find();
    res.status(200).json({name: "user", users})
}

let findUserById = async (req, res, next) => {
    let id = req.params.id
    let user = await User.findById(id)
    res.status(200).json({name: "user", user})
}

let addUser = async (req, res, next) => {
    let data = req.body
    let user = await User.create(data)
    res.status(201).json({name:"user", user})
}

let updateUserById = async (req, res, next) => {
    let id = req.params.id
    let data = req.body
    let user = await User.findByIdAndUpdate(id, data, {new: true})
    res.status(200).json({ name: "user", user })
}

let deleteUserById = async (req, res, next) => {
    let id = req.params.id

    await User.findByIdAndDelete(id)
    res.status(204).json({name: "user"})
}




module.exports = {findAllUser, findUserById, addUser, updateUserById, deleteUserById}