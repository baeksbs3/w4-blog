const express = require("express");
const router = express.Router();
const { Posts, Users } = require("../models");
const authMiddleware = require("../middlewares/login_auth");

module.exports = router;
