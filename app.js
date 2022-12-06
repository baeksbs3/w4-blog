const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3010;
const { sequelize } = require("./models");
// const indexRouter = require("./routes");
// const connect = require("./schemas");
// connect();

// app.use(express.json());
// app.use(morgan("dev"));
// app.use(urlencoded());

// app.use("/api", indexRouter);

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});
