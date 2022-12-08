// middlewares/auth-middleware.js

const jwt = require("jsonwebtoken");
const { Users } = require("../models");
require("dotenv").config();

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const [authType, authToken] = (authorization || "").split(" ");

  if (!authToken || authType !== "Bearer") {
    res.status(401).send({
      errorMessage: "로그인 후 이용 가능한 기능입니다 1.",
    });
    return;
  }

  try {
    const { userId } = jwt.verify(authToken, process.env.JWT_SECRET_KEY);
    Users.findByPk(userId).then((user) => {
      res.locals.user = user;
      next();
    });
  } catch (error) {
    console.log("error인증실패: ", error);

    res.status(401).send({
      errorMessage: "로그인 후 이용 가능한 기능입니다. 2",
    });
  }
};
