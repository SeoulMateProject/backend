const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const DiarySchema = new mongoose.Schema({
  DiaryId: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  KakaoId: {
    type: String,
    required: true,
  },
  PlaceId: {
    type: String,
  },
  DiaryImage: {
    type: String,
  },
  Title: {
    type: String,
  },
  Content: {
    type: String,
  },
  Like: {
    type: Number,
    default: 0,
  },
  Date: {
    type: Date,
  },
  Public: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Diary", DiarySchema);
