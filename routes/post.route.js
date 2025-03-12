const {findAllPost, findPostById, addPost, updatePostById, deletePostById} =require("../controller/post.controller")
const express = require("express")
const multer = require("multer");
const path = require("path");


let router = express.Router()


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

router.route("/").get(findAllPost).post(upload.single('file'), addPost)

router.route("/:id").get(findPostById).put(updatePostById).delete(deletePostById)

module.exports = router