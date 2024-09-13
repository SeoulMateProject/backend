const placeService = require("../services/placeService");

exports.showPlace = async (req, res, next) => {
  try {
    const { PlaceId } = req.params;

    const placeInfo = await placeService.showPlace(PlaceId);

    res.json(placeInfo);
  } catch (error) {
    next(error);
  }
};
