const express = require("express");
const router = express.Router();
const { Posts, Users, PostLikes } = require("../models");
const authMiddleware = require("../middlewares/login_auth");

// 게시글 작성
// router.post("/", authMiddleware, (req, res)=> {
//     const { title, contents} = req.body;
//     await Posts.create({
//         title: title,
//         contents:contents,
//     })

// })

module.exports = router;
