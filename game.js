
// Require Stuff ====================================
var inquirer = require('inquirer');
var Word = require('./word.js');
var wordList = require('./word_list.js');


// Set Variables ====================================
var guesses = 10;


// Get Word and build array
var wordArray = [];
var chosenWord = wordList[Math.floor(Math.random() * wordList.length)];


// console.log(wordArray);
// console.log(chosenWord);


function playGame(){


	if(guesses > 0){



		var newWord = new Word(chosenWord)
		console.log(newWord.displayWord)

		inquirer.prompt([
			{
				name: 'letter',
				message: 'Guess The Letter'
			}

			
		
			]).then(answers => {

				if(this.correctGuess === true){
					console.log("correct");
					playGame();
				} else {
					console.log("incorrect")
					playGame();
					guesses--;
				}
		});
	} else{

		gameOver();

	}
}

function gameOver(){
	console.log('You lost sucka')
}

playGame();






// create array of words
// choose random word
// display word with underscores in place of letters
// display word with empty letters
// prompt user to enter letter
// if correct guess, log "correct" show letter
// if incorrect guess, log "incorrect" show number of guesses remaining --