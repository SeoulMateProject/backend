const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MyPageSchema = new Schema({
  KakaId: {
    type: Number,
    required: true,
  },
  scrapedPlaceId: [String],
  scrapedDiaryId: [String],
});

module.exports = mongoose.model("MyPage", MyPageSchema);
