 
 //use Map
module.exports=function distanceMeter(sourceLocation,locations){

    const locationDistanceMeter={};
    const routeLenght=Object.values(locations).length;

    for(let i=0;i<routeLenght;i++){

        let x=locations[i].locationLatitude - sourceLocation.locationLatitude;
        let y=locations[i].locationLongitude - sourceLocation.locationLongitude;

        x=x ** 2; 
        y=y**2;

        let distance=Math.sqrt(x+y);

        locationDistanceMeter[locations[i].id]=[distance];
        
    }
    console.log(locationDistanceMeter);
    return "basarili";
};
