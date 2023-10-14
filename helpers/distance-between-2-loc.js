
module.exports=function distanceBetween2Loc(sourceLocation,locations){
    const routeLenght=Object.values(locations).length;
    const locationDistanceMeter= new Map();

    // calculate distance between 2 locations
    for(let i=0;i<routeLenght;i++){

        let x=locations[i].locationLatitude - sourceLocation.locationLatitude;
        let y=locations[i].locationLongitude - sourceLocation.locationLongitude;

        x=x ** 2; 
        y=y**2;

        let distance=Math.sqrt(x+y);

        locationDistanceMeter.set(locations[i].id, {distance:distance,locationTitle:locations[i].locationTitle});
    }
    return locationDistanceMeter;
}
