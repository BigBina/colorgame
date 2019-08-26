var numSquares = 6;
var colors = [];
var pickedColor;

var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");

var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
    //--MODE BUTTONS--//
for(var i = 0; i< modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function()
    {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected")
// the below statement is the equivalent to an if/else statement
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
    //if                         //then           //else 
        reset();
    });
}
//--SQUARE LISTENERS--//
for(var i = 0; i < squares.length; i++){
    
    squares[i].addEventListener("click", function()
    {
        //grab color of clicked square and store it
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor); //We passed in this argument to change all the colors to the correct color once it is guessed
            h1.style.backgroundColor = clickedColor;
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}
reset();
}
function reset(){
 //generate all new colors
 colors= generateRandomColors(numSquares);
 //pick new random color from array
 pickedColor = pickColor();
 //change colorDisplay to mach picked color
 colorDisplay.textContent = pickedColor;
 //change colors of squares
 resetButton.textContent = "New Colors"
 messageDisplay.textContent = "";
 for(var i = 0; i<squares.length;i++)
 {
     if(colors[i])
     {
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
     } else{
            squares[i].style.display = "none";
        }
 }
 h1.style.backgroundColor = "steelblue";
}
resetButton.addEventListener("click", function()
{
    reset();
});
function changeColors(color){ //function is used to change all the colors to one color is it is guessed correctly
    for(var i = 0; i < colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
}
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return (colors[random]);
}
function generateRandomColors(num){
var arr = [];
for(var i = 0; i< num; i++){
    //push in random colors
    arr.push(randomColor())
}
return arr;
}
function randomColor(){
    //pick a red from 0-255
    var r = Math.floor(Math.random() * 256)
    //pick a green from 0-255
    var g = Math.floor(Math.random() * 256)
    //pick a blue from 0-255
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g +", " + b +")";
}