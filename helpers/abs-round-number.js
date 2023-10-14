   

module.exports=function number(numLatitude,numLongitude){
    console.log("numLatitude,numLongitude")
    console.log(numLatitude,numLongitude);
    const Latitude=Math.round( (numLatitude<0)? (18 + Math.abs(Math.round(Math.abs(numLatitude) / 10)  )) : (Math.abs(Math.round(Math.abs(numLatitude) / 10)  )));

    const Longitude=Math.round( (numLongitude<0)? (Math.abs(Math.round(Math.abs(numLongitude)/10)) -1 ):(8 + ( Math.round(numLongitude / 10) -1 )));

    console.log("numLatitude,numLongitude")

    console.log(Latitude,Longitude);
    
    return [Latitude,Longitude];
}