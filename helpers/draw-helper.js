const absRoundNumber=require("./abs-round-number");

module.exports = function draw(sourceLocation,drawPoint)
{

    const sourceLocationData=absRoundNumber(sourceLocation.locationLatitude,sourceLocation.locationLongitude);
    const sourceLocationLatitude=sourceLocationData[0];
    const sourceLocationLongitude=sourceLocationData[1];
    // console.log(sourceLocationLatitude,sourceLocationLongitude);
    const length= +drawPoint.length + 1;

    console.log(drawPoint);
    let map="-";
    for(let y=0;y<=36;y++){      //for y axis

        for(let x=0;x<=18;x++){   //for x axis

            
        
            if(x==sourceLocationLongitude && y==sourceLocationLatitude){
                map+="C";

            }
            if(y==18 && x==9){
                map+="O";
            }

            for (let l = 0; l < length-1; l++) {
                
                if(y==drawPoint[l].locationLatitude && x==drawPoint[l].locationLongitude ){
                    map+=l+1;
                }
             }
            map+="-"
             
            
        }
    map+="\n";

    }
    // console.log("map:")
    // console.log(map)
    return map;
} 

// 
// 6529379393e6e86b2956f097