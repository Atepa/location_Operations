const absRoundNumber = require('./absRoundNumber');

module.exports = function draw(sourceLocation, drawPoint) {
  const sourceLocationData = absRoundNumber(
    sourceLocation.locationLatitude,
    sourceLocation.locationLongitude,
  );
  const sourceLocationLatitude = sourceLocationData[0];
  const sourceLocationLongitude = sourceLocationData[1];

  const length = +drawPoint.length + 1;

  let map = '';

  for (let y = 0; y <= 36; y += 1) { // for y axis
    for (let x = 0; x <= 18; x += 1) { // for x axis
      if (x === sourceLocationLongitude && y === sourceLocationLatitude) {
        map += ' C ';
      }
      if (y === 18 && x === 9) {
        map += ' O ';
      }

      for (let l = 0; l < length - 1; l += 1) {
        if (y === drawPoint[l].locationLatitude && x === drawPoint[l].locationLongitude) {
          map += ` ${l + 1} `;
        }
      }

      map += ' - ';
    }
    map += '\n';
  }
  return map;
};
