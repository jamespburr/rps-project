// Enum of Selections
const Selections = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors",
};
Object.freeze(Selections);

// Enum of Outcomes
const Outcomes = {
    PLAYER_WINS: "player",
    COMPUTER_WINS: "computer",
    TIE: "tie",
};
Object.freeze(Outcomes);


class Round{

    constructor(playerSelection){
        this.playerSelection = playerSelection;
        this.computerSelection = this.getComputerSelection();
    }

    /**
     * get a random computer selection
     * @returns Selections
     */
    getComputerSelection() {
        //*********************************ADD CODE HERE *************************************/
        // Use Math.floor and select a random Selections enumerator from above 
        let selectionArray = Object.values(Selections)
        let selection = Math.floor(Math.random()*3);
        return selectionArray[selection]
        
        
    }

    /**
     * determine the winner of the round
     * @param {*} playerSelection
     * @param {*} computerSelection
     * @returns Outcomes
     */
    determineWinner() {
        //*********************************ADD CODE HERE *************************************/
        // Use this.playerSelection and this.computerSelection to return the appropriate outcome from the Outcomes enumerator above.
        let outcome = "";
        if (this.playerSelection == Selections.ROCK && this.computerSelection == Selections.SCISSORS) {
            outcome = Outcomes.PLAYER_WINS
            game.incrementPlayerWins()
        } 
        else if (this.playerSelection == Selections.ROCK && this.computerSelection == Selections.PAPER) {
            outcome = Outcomes.COMPUTER_WINS;
            game.incrementComputerWins()
        }
        else if (this.playerSelection == Selections.PAPER && this.computerSelection == Selections.ROCK) {
            outcome = Outcomes.PLAYER_WINS
            game.incrementPlayerWins()
        }
        else if (this.playerSelection == Selections.PAPER && this.computerSelection == Selections.SCISSORS){
            outcome = Outcomes.COMPUTER_WINS
            game.incrementComputerWins()
        }   
        else if (this.playerSelection == Selections.SCISSORS && this.computerSelection == Selections.PAPER){
            outcome = Outcomes.PLAYER_WINS
            game.incrementPlayerWins()
        }
        else if (this.playerSelection = Selections.SCISSORS && this.computerSelection == Selections.ROCK) {
            outcome = Outcomes.COMPUTER_WINS
            game.incrementComputerWins()
        }
        else if (this.playerSelection == this.computerSelection){
            outcome = Outcomes.TIE
            game.incrementCountOfTies()
        }

        return outcome
    }



}


//DO NOT TOUCH THIS LINE OF CODE//
let unit_test1 = Round; 