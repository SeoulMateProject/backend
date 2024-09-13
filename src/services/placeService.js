exports.showPlace = async (PlaceId) => {
  const placeInfo = await Place.findOne({ PlaceId });

  return placeInfo;
};
