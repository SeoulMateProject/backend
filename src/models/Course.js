const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  DiaryId: {
    type: String,
    default: uuidv4,
    unique: true,
  },
});

module.exports = mongoose.model("Course", CourseSchema);
