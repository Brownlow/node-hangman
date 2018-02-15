var inquirer = require('inquirer');
var Word = require('./word.js');

var words = ['alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot', 'golf', 'hilo', 'indigo', 'juliet', ]

var guesses = 10;




inquirer.prompt([
	{
		name: 'name',
		message: 'Guess The Letter'
	}

	]).then(answers => {
    	

});



// create array of words
// choose random word
// display word with underscores in place of letters
// display word with empty letters
// prompt user to enter letter
// if correct guess, log "correct" show letter
// if incorrect guess, log "incorrect" show number of guesses remaining --