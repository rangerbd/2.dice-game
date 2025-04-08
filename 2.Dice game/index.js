//adding random number and adding according to the image
var randomNumber1 = Math.floor(Math.random()*6)+1;
var diceImage = "dice" + randomNumber1 + ".png"
var randomImageSource = "images/" + diceImage

var randomNumber2 = Math.floor(Math.random()*6)+1;
var diceImage2 = "dice" + randomNumber2 + ".png"
var randomImageSource2 = "images/" + diceImage2

image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource)

image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);



if (randomNumber1 == randomNumber2)
    document.querySelector("h1").innerHTML = "Its a Draw";
else if (randomNumber1 > randomNumber2)
    document.querySelector("h1").innerHTML = "Player 1 win";
else
    document.querySelector("h1").innerHTML = "Player 2 win";
