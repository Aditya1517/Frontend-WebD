// setting value for dice 1
var diceNum1 = Math.floor(Math.random()*6)+1; // 1-1
var randomDiceNum1 = "dice"+diceNum1+".png";
var randomImageSrc1 = "./images/"+randomDiceNum1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSrc1);

// setting valur for dice 2
var  diceNum2 = Math.floor(Math.random()*6)+1;
var randomDiceNum2 = "dice"+diceNum2+".png";
var randomImageSource2 = "./images/"+randomDiceNum2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

// who is going to win
if(diceNum1>diceNum2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if(diceNum2>diceNum1){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}