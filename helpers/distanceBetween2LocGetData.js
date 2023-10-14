
module.exports=function distanceBetween2LocGetData(sourceLocation,locations){

    const routeLenght=Object.values(locations).length;
    let locationDrawRoute= [];
 
    for(let i=0;i<routeLenght;i++){

        let x=locations[i].locationLongitude - sourceLocation.locationLongitude;
        let y=locations[i].locationLatitude - sourceLocation.locationLatitude;
       

        x=x ** 2; 
        y=y**2;

        let distance=Math.sqrt(x+y);

        locationDrawRoute.push(
            {
            id:locations[i].id,
            distance:distance,
            locationTitle:locations[i].locationTitle,

            // for example= 68 = 70  and 62 = 60
            locationLatitude:Math.round( (locations[i].locationLatitude<0)? (18 + Math.abs(Math.round(Math.abs(locations[i].locationLatitude) / 10) +1 )) : (Math.abs(Math.round(Math.abs(locations[i].locationLatitude) / 10) +1 ))),  

            locationLongitude:Math.round( (locations[i].locationLongitude<0)? (Math.abs(Math.round(Math.abs(locations[i].locationLongitude)/10)) +1 ):(8 + ( Math.round(locations[i].locationLongitude / 10)  ))),   
     
        }); 

    }
    return locationDrawRoute;
}



//"locationLatitude": 48.8883, y
// "locationLongitude": -48.884, x