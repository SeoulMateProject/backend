const express = require("express");
const router = express.Router();
const diaryController = require("../controllers/placeController");

router.post("/place/:PlaceId", diaryController.createDiary);

module.exports = router;
