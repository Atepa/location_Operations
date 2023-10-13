 module.exports=function distanceMeter(sourceLocation,locations){
    const routeLenght=Object.values(locations).length;
    console.log(routeLenght);    
    for(let i=0;i<routeLenght;i++){
        console.log(locations[i].locationLatitude);
        console.log(locations[i].locationLongitude);
    }
    
    return "basarili";
};
