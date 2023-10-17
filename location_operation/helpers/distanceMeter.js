const distanceBetween2Loc = require('./distanceBetween2Loc');

module.exports = function distanceMeter(sourceLocation, locations) {
  const locationDistanceMeter = distanceBetween2Loc(sourceLocation, locations);

  const mapToArray = Array.from(locationDistanceMeter);
  mapToArray.sort((a, b) => a[1].distance - b[1].distance);
  const sortedMap = new Map(mapToArray);

  return sortedMap;
};
