var game = new Game();


// main entry point
function playGame() {
    //*********************************ADD CODE HERE *************************************/
    // Call the function game.newGame() to reset the counts.
    game.newGame()

    //*********************************ADD CODE HERE *************************************/
    // Get the number of rounds from the user, and store it in a variable called numberOfRounds.
    // Use game.IsNumerOfRoundsValid() to validate the user input.
    // If the input is valid, use game.setNumberOfRounds(numberOfRounds) to set the number of rounds for the game 
    //  >> Else, try to get the number of rounds for the suer again
   
    let numberOfRounds = 0;
    let isRoundsValid = false;

    do {
    numberOfRounds = parseInt(window.prompt('Enter number of rounds (1-5)'));
    isRoundsValid = game.isNumberOfRoundsValid(numberOfRounds);
    } while (!isRoundsValid);

    game.setNumberOfRounds(numberOfRounds);

    //*********************************ADD CODE HERE *************************************/
    // Call playRound() with a parameter of the round count (1 thru numberOfRounds) for each round
    
    for (let i = 0; i < numberOfRounds; i++){
        
        playRound(i)
    }

    

    //*********************************ADD CODE HERE *************************************/
    // Display the Final Score from the properties stored in the Game object
    console.log('Player Score: ' + game.countOfPlayerWins)
    console.log('Computer Score: ' + game.countOfComputerWins)
    console.log('Ties: ' + game.countOfTies)
}

/**
 * play a round of rock paper scissors
 * @param {*} roundNumber
 */
function playRound(roundNumber) {
    //*********************************ADD CODE HERE *************************************/
    // Display the Current Score to the User
    console.log('Player Score: ' + game.countOfPlayerWins)
    console.log('Computer Score: ' + game.countOfComputerWins)
    console.log('Ties: ' + game.countOfTies)
    
    //Prompt for Player Selection
    let playerSelection = getPlayerSelection();
    let round = new Round(playerSelection);

    //Play the Round
    let outcome = round.determineWinner();

    //*********************************ADD CODE HERE *************************************/
    // Display the Round Results from the properties stored in the Round object
    console.log('Outcome: ' + outcome)
}



/**
 * prompt the user to get a selection
 * @returns Selections
 */
function getPlayerSelection() {
    
    //*********************************ADD CODE HERE *************************************/
    // Prompt, Validate and Return the player selection. This must be in the form of "rock", "paper", or "scissors" exactly

    let playerSelection = ""
    let selectionArray = Object.values(Selections)

    do {
        playerSelection = window.prompt('Enter rock, paper or scissors')
        if (playerSelection === null) {
            playerSelection = ""
        }
        playerSelection = playerSelection.toLowerCase()
    } while (!selectionArray.includes(playerSelection))

    return playerSelection
       
}

