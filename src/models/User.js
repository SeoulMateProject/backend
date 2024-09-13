const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  kakaoId: {
    type: String,
    required: true,
    unique: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  profile_image: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
