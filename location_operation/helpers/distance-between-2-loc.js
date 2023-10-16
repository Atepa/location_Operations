module.exports = function distanceBetween2Loc(sourceLocation, locations) {
  const routeLenght = Object.values(locations).length;
  const locationDistanceMeter = new Map();

  // calculate distance between 2 locations
  for (let i = 0; i < routeLenght; i += 1) {
    let x = locations[i].locationLatitude - sourceLocation.locationLatitude;
    let y = locations[i].locationLongitude - sourceLocation.locationLongitude;

    x **= 2;
    y **= 2;

    const distance = Math.sqrt(x + y);
    locationDistanceMeter.set(
      locations[i].id,
      {
        distance,
        locationTitle: locations[i].locationTitle,
      },
    );
  }
  return locationDistanceMeter;
};
