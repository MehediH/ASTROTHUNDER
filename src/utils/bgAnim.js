export const generateBG = (screenWidth, screneHeight, animated)=>{
    var elemW;
    var width = window.innerWidth;

    if(width < 1366){
        elemW = 250; 
    } else if(width < 1000){
        elemW = 220;
    } else if(width< 800){
        elemW = 200;
    } else if(width < 600){
        elemW = 150;
    } else{
        elemW = 300;
    }

    var elemProps = {
        gridSizeX: Math.round(screenWidth / (elemW - 100)),
        gridSizeY: Math.round(screneHeight / (elemW - 120)),
        resize: animated ? "sn-anim" : "square-anim"
    }

    return elemProps;
}