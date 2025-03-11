const express = require("express")
const {findAllUser, findUserById, addUser, updateUserById, deleteUserById} =require("../controller/user.controller")


let router = express.Router()
let path  = require("path")


router.route("/").get(findAllUser).post(addUser)

router.route("/:id").get(findUserById).put(updateUserById).delete(deleteUserById)

module.exports = router