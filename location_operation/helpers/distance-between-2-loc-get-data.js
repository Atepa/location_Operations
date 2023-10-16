const absRoundNumber = require('./abs-round-number');

module.exports = function distanceBetween2LocGetData(sourceLocation, locations) {
  const routeLenght = Object.values(locations).length;
  const locationDrawRoute = [];

  for (let i = 0; i < routeLenght; i += 1) {
    let x = Math.abs(locations[i].locationLongitude - sourceLocation.locationLongitude);
    let y = Math.abs(locations[i].locationLatitude - sourceLocation.locationLatitude);

    x **= 2;
    y **= 2;

    const distance = Math.sqrt(x + y);
    const sourceLocationData = absRoundNumber(
      locations[i].locationLatitude,
      locations[i].locationLongitude,
    );

    const sourceLocationLatitude = sourceLocationData[0];
    const sourceLocationLongitude = sourceLocationData[1];
    locationDrawRoute.push(
      {
        id: locations[i].id,
        distance,
        locationTitle: locations[i].locationTitle,
        locationLatitude: sourceLocationLatitude, // for example= 68 = 70  and 62 = 60
        locationLongitude: sourceLocationLongitude, // for example= 68 = 70  and 62 = 60
      },
    );
  }
  return locationDrawRoute;
};
