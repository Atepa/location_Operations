const distanceBetween2Loc=require("./distance-between-2-loc");
const draw=require("./draw");


module.exports = function drawPosition(sourceLocation,locations)
{
    const drawPoint=distanceBetween2Loc(sourceLocation,locations);
    console.log(drawPoint);
    const draw=draw(sourceLocation,drawPoint);

    return drawPoint;
} 