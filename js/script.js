var tennisBall = document.querySelector(".ball");
var xSign = 1; // left sign
var ySign = 1; // top sign
var leftPos = 350;
var topPos = 150;
var speed = 5;

//creating a variable to count the number of times the mouse is dragged
var dragCount = 0;

(function(){
    document.onmouseup = function(event){
        if(dragCount == 0){
            // storing two random numbers either 0 or 1
            var randomXSign = Math.round(Math.random());
            var randomYSign = Math.round(Math.random());
            //using those numbers to randomly choose direction
                // X-Direction
            if (randomXSign == 0){
                xSign = -1;
            }
            if (randomXSign == 1){
                xSign = 1;
            }
                // Y-Direcion
            if (randomYSign == 0){
                ySign = -1;
            }
            if (randomYSign == 1){
                ySign = 1;
            }
            // setting interval for move function
            setInterval(Move, 20);
        }
        dragCount++;
    }
})();

function Move() 
{
    if(leftPos==50){
        xSign = xSign*(-1);
    }
    if(leftPos==720){
        xSign = xSign*(-1);
    }
    if(topPos==50){
        ySign = ySign*(-1);
    }
    if(topPos==360){
        ySign = ySign*(-1);        
    }
    leftPos = leftPos + (speed*xSign);
    topPos = topPos + (speed*ySign);
    tennisBall.style.left = leftPos+"px";
    tennisBall.style.top = topPos+"px";
    console.log(ySign);
}
