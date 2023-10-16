const absRoundNumber=require("./abs-round-number");

module.exports=function distanceBetween2LocGetData(sourceLocation,locations){

    const routeLenght=Object.values(locations).length;
    let locationDrawRoute= [];
 
    for(let i=0;i<routeLenght;i++){

        let x=Math.abs(locations[i].locationLongitude - sourceLocation.locationLongitude);
        let y=Math.abs(locations[i].locationLatitude - sourceLocation.locationLatitude);
       

        x=x ** 2; 
        y=y ** 2;

        let distance=Math.sqrt(x+y);
        const sourceLocationData=absRoundNumber(locations[i].locationLatitude,locations[i].locationLongitude);
        const sourceLocationLatitude=sourceLocationData[0];
        const sourceLocationLongitude=sourceLocationData[1];
        locationDrawRoute.push(
            {
            id:locations[i].id,
            distance:distance,
            locationTitle:locations[i].locationTitle,

            // for example= 68 = 70  and 62 = 60
            locationLatitude:sourceLocationLatitude,  
            locationLongitude:sourceLocationLongitude,  
        }); 

    }
    return locationDrawRoute;
}



//"locationLatitude": 48.8883, y
// "locationLongitude": -48.884, x