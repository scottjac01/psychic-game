
    // Creates an array that lists out all of the options 
    //(Letters in the alphabet).
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h",
        "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
        "t", "u", "v", "w", "x", "y", "z"];

    //Counter to keep track of wins, loses, and tries.
    var winCounter = 0;
    var loseCounter = 0;
    var numTries = 10;

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer"s guess.
      var computerGuess = computerChoices[Math.floor(Math.random() 
        * computerChoices.length)];
      
      // Run this block of code after the users selects a key to detrimine if they won or lost
      if (userGuess === computerGuess) {
         winCounter++;
         alert("You guessed the right letter: " + computerGuess)
         numTries = 10;
      }
      else if (numTries <= 0){
          alert("You have: " + numTries + " tries left.  " + "Refresh the page to try again!");
          confirm("Select \"OK\" to reload the page", location.reload(true/false));
      }
      else{
        numTries--;
        var targetP = document.getElementById("chose");
        var newP = document.createElement("p");
        targetP.innerHTML = "Letters you've guessed so far: " + userGuess + ", ";
        newP.append(userGuess);
      }
      // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
          "<p>Wins!!!: " + winCounter + "</p>" +
          "<p>Losses: " + loseCounter + "</p>" +
          "<p>Guesses left: " + numTries + "</p>";


        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#win", "#lose", "#guess").innerHTML = html;
    };