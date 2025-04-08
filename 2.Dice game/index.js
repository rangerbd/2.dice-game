var randomNumber1 = Math.floor(Math.random()*6)+1;
var diceImage = "dice" + randomNumber1 + ".png"
var randomImageSource = "images/" + diceImage

var randomNumber2 = Math.floor(Math.random()*6)+1;
var diceImage2 = "dice" + randomNumber2 + ".png"
var randomImageSource2 = "images/" + diceImage2

image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource)

image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2)