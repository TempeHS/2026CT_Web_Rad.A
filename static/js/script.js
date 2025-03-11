gamerScore = "1";
computerScore = "1";

sumScore = gamerScore + computerScore;

alert(" your score is " + sumScore);

function myGame() {
  player_name = prompt("enter your name");

  alert("Hello " + player_name);
  player_guess = prompt("Guess a number between 1 and 5");
  computer_guess = randomIntfromInterval(1, 5);
  if (player_guess == computer_guess) {
    document.getElementById("user_feedback").innerHTML =
      "Correct, you may proceed";
  } else {
    if (player_guess != computer_guess)
      document.getElementById("user_feedback").innerHTML =
        "Incorrect, you lose \n" + "The computer guessed " + computer_guess;
    setTimeout(function () {
      location.reload();
    }, 3000);
  }
  function randomIntfromInterval(min, max) {
    //min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

window.onload = myGame;

gamerScore = "1";
computerScore = "1";

sumScore = gamerScore + computerScore;

alert(" your score is " + sumScore);
