const distanceBetween2LocGetData=require("./distanceBetween2LocGetData");
const drawHelper=require("./draw-helper");


module.exports = function drawPosition(sourceLocation,locations)
{
    const drawPoint=distanceBetween2LocGetData(sourceLocation,locations);

    const draw=drawHelper(sourceLocation,drawPoint);

    return draw;
} 