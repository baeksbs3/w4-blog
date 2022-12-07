const express = require("express");
const router = express.Router();
const { Posts, Users, PostLikes } = require("../models");
const authMiddleware = require("../middlewares/login_auth");

// 게시글 작성
router.post("/", authMiddleware, async (req, res) => {
  const { title, contents } = req.body;
  const user = res.locals.user;
  console.log(user);
  if (title == "") {
    res.status(412).send({ erorrMessage: "제목을 입력하세요" });
    return;
  }
  if (contents == "") {
    res.status(412).send({ erorrMessage: "내용을 입력하세요" });
    return;
  }
  try {
    const post = await Posts.create({
      title: title,
      contents: contents,
      userId: user.id,
    });
    return res.status(201).send({ message: "게시글 작성 완료" });
  } catch (error) {
    return res.status(500).send({ erorrMessage: "알수없는 오류 발생" });
  }
});

//게시글 수정
router.put("/:postId", authMiddleware, async (req, res) => {
  const { postId } = req.params;
  const { title, contents } = req.body;
  const updatePost = await Posts.findOne({ where: { id: postId } });

  if (!updatePost) {
    res.status(412).send({ erorrMessage: "존재하지 않는 게시글 입니다" });
    return;
  }
  if (title == "") {
    res.status(412).send({ erorrMessage: "제목을 입력하세요" });
    return;
  }
  if (contents == "") {
    res.status(412).send({ erorrMessage: "내용을 입력하세요" });
    return;
  }
  try {
    const updatePost = await Posts.update(
      { title, contents },
      { where: { id: postId } }
    );
    return res.status(200).send({ message: "수정 완료" });
  } catch (error) {
    return res.status(500).send({ erorrMessage: "알수없는 오류 발생" });
  }
});

//게시글 삭제
router.delete("/:postId", authMiddleware, async (req, res) => {
  const { postId } = req.params;
  const deletePost = await Posts.findOne({ where: { id: postId } });
  if (!deletePost) {
    res.status(404).send({ erorrMessage: "존재하지 않는 게시글 입니다" });
    return;
  }
  try {
    const deletePost = await Posts.destroy({ where: { id: postId } });
    res.status(200).send({ message: "게시글 삭제 완료" });
  } catch (error) {
    res.status(500).send({ erorrMessage: "알수없는 오류 발생" });
  }
});

//게시글 전체 조회 (로그인 필요 없음)
router.get("/", async (req, res) => {
  try {
    const posts = await Posts.findAll({
      attributes: { exclude: ["password", "email", "contents"] },
    });

    res.status(200).send({ posts });
  } catch (error) {
    res.status(500).send({ erorrMessage: "알수없는 오류 발생" });
  }
});

//게시글 상세 조회 (로그인 필요 없음)
router.get("/:postId", async (req, res) => {
  const { postId } = req.params;
  try {
    const post = await Posts.findOne({
      where: { id: postId },
      attributes: { exclude: ["password", "email"] },
    });
    res.status(200).send({ post });
  } catch (error) {
    res.status(500).send({ erorrMessage: "알수없는 오류 발생" });
  }
});

module.exports = router;
