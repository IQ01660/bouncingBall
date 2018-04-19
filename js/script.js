// var squares = document.querySelectorAll(".wrapper>div");
// function Blush() {
//     for(var i = 0; i < 16; i++){
//         squares[i].style.background = "gray";
//     }
//     var randomRed = Math.floor(Math.random()*255);
//     var randomBlue = Math.floor(Math.random()*255);
//     var randomGreen = Math.floor(Math.random()*255);
//     var randomSquare = Math.floor(Math.random()*16);
    
//     squares[randomSquare].style.background = "rgb("+randomRed+","+randomBlue+","+randomGreen+")";
// }
// setInterval(Blush, 800);

var tennisBall = document.querySelector(".ball");
var xSign = 1; // left sign
var ySign = 1; // top sign
var leftPos = 10;
var topPos = 10;

function Move() 
{
    if(leftPos==0){
        xSign = xSign*(-1);
    }
    if(leftPos==770){
        xSign = xSign*(-1);
    }
    if(topPos==0){
        ySign = ySign*(-1);
    }
    if(topPos==370){
        ySign = ySign*(-1);
        
    }
    leftPos = leftPos + (5*xSign);
    topPos = topPos + (5*ySign);
    tennisBall.style.left = leftPos+"px";
    tennisBall.style.top = topPos+"px";
    console.log(ySign);
}
setInterval(Move, 50);