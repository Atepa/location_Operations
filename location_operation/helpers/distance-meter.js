const distanceBetween2Loc = require('./distance-between-2-loc');

module.exports = function distanceMeter(sourceLocation, locations) {
  // get the distance to other location from the source location
  const locationDistanceMeter = distanceBetween2Loc(sourceLocation, locations);

  // map to array for sorting
  const mapToArray = Array.from(locationDistanceMeter);
  // sort array
  mapToArray.sort((a, b) => a[1].distance - b[1].distance);
  // map to array
  const sortedMap = new Map(mapToArray);

  return sortedMap;
};
