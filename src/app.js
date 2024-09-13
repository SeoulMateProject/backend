const express = require("express");
const connectDB = require("./config/DB");
const userRoutes = require("./routes/userRoutes");
const diaryRoutes = require("./routes/diaryRoutes");
require("dotenv").config();

const app = express();

// 데이터베이스 연결
connectDB();

// 미들웨어 설정
app.use(express.json());

// 라우터 설정
app.use("/users", userRoutes);
app.use("/diaries", diaryRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
