
module.exports=function distanceBetween2LocGetData(sourceLocation,locations){
    const routeLenght=Object.values(locations).length;
    let locationDrawRoute= [];

    //calculate distance between 2 locations
    for(let i=0;i<routeLenght;i++){

        let x=locations[i].locationLatitude - sourceLocation.locationLatitude;
        let y=locations[i].locationLongitude - sourceLocation.locationLongitude;

        x=x ** 2; 
        y=y**2;

        let distance=Math.sqrt(x+y);

        locationDrawRoute.push(
            {
            id:locations[i].id,
            distance:distance,
            locationTitle:locations[i].locationTitle,
            locationLatitude:locations[i].locationLatitude % 10,
            locationLongitude:locations[i].locationLongitude % 10
        }); 
        
    }
    return locationDrawRoute;
}
