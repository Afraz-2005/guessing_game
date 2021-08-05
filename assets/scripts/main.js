let range = document.getElementById("range").value;
let guessCounter = 1;
const status = document.querySelector('.main4');
const gamestatus = document.querySelector('#gameOver');
let restartButton = document.querySelector('#restart');
let gameOver = document.querySelector('#gameOver');
document.querySelector(".btn1").addEventListener("click", displayFunction);


function displayFunction() {
  range = document.getElementById("range").value;
  document.getElementById("span").innerHTML = range;
  random = Math.floor((Math.random() * range) + 1);
    randomNum = Math.round(random);
}

document.querySelector(".btn2").addEventListener("click", RandomNumberGenerator);

let random;
let randomNum;

function RandomNumberGenerator() {
  let number = document.getElementById("number").value;
  let guess = 1;
  guessCounter++;

  if (guessCounter == 11) {
    endGame();

    if (number != randomNum) {
        gameOver.innerHTML = " " + randomNum;
    }

  } 
  if (number == randomNum) {
    document.getElementById("display").style.display = "flex";
    document.getElementById("displayResult")
    .innerHTML = "Correct answer in " + guess + " guess";

  } else if (number > randomNum) {
    guess++;
    document.getElementById("display").style.display = "flex";
    document.getElementById("displayResult")
    .innerHTML = "Your answer is higher than the required answer";

  } else if (number < randomNum) {
    guess++;
    document.getElementById("display").style.display = "flex";
    document.getElementById("displayResult")
    .innerHTML = "Your answer is lower than the required number";

  } else if (isNaN(number)) {
    document.getElementById("display").style.display = "flex";
    document.getElementById("displayResult")
    .innerHTML = "Your answer is not a number";
  }
}


function endGame() {
    status.style.display = "flex";
    restartButton.style.display = "block";
}

