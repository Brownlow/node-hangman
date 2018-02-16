
// Require Stuff ====================================
var inquirer = require('inquirer');
var Word = require('./word.js');
var Word = require('./word.js');

// Set Variables ====================================
var guesses = 10;





function playGame(){


	if(guesses > 0){



		inquirer.prompt([
			{
				name: 'letter',
				message: 'Guess The Letter'
			}
		
			]).then(answers => {

				console.log(answers);
		
		});
	} else{

		gameOver();

	}
}

playGame();






// create array of words
// choose random word
// display word with underscores in place of letters
// display word with empty letters
// prompt user to enter letter
// if correct guess, log "correct" show letter
// if incorrect guess, log "incorrect" show number of guesses remaining --