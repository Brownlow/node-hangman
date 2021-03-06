var Letter = function(letter){
	this.letter = letter;
	this.letterGuessed = false;
	this.displayLetter = function(){

		if(this.letterGuessed === true){
			return this.letter;
			this.letterGuessed = true;
		} else{
			return '_';
		}
	}
	this.correctGuess = function(){
		this.letterGuessed = true;
	}
}


module.exports = Letter;



// * A string value to store the underlying character for the letter

//   * A boolean value that stores whether that letter has been guessed yet

//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly