const express = require("express");
const router = express.Router();
const commentsRouter = require("./commentsRoutes.js");
const postsRouter = require("./postsRoutes.js");
const authRouter = require("./authRoutes.js");

router.use("/posts", postsRouter);
router.use("/comments", commentsRouter);
router.use("/auth", authRouter);

module.exports = router;
