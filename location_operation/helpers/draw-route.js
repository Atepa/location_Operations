const distanceBetween2LocGetData=require("./distance-between-2-loc-get-data");
const drawHelper=require("./draw-helper");


module.exports = function drawPosition(sourceLocation,locations)
{
    const drawPoint=distanceBetween2LocGetData(sourceLocation,locations);

    const draw=drawHelper(sourceLocation,drawPoint);

    return draw;
} 