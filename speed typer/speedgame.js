//add window event listener so that this occures when window loads
window.addEventListener('load',init);

//create some variable
//these are global
//levels
const levels = {
	easy: 5,
	medium: 3,
	hard: 2
};
//to change levels
const currentLevel = levels.easy;

let time= currentLevel; //timer variable
let score=0;//the score
let isplaying; //the game state

//DOM elements things we want from the html file
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const timeDisplay = document.querySelector('#time');

//enter the words array program needs th know where to get the words, we dont want the array to change
const words = [
'concentrate',
'dad',
'motion',
'command',
'stroke',
'mine',
'label',
'prick',
'fairies',
'surprise',
'gamy',
'sincere',
'nosy',
'tail',
'wicked',
'pack',
'permit',
'town',
'abstracted',
'useless',
'toys',
'scared',
'two',
'guitar',
'separate',
'gather',
'curve',
'contain',
'green',
'annoy'
];

//init function to work when the window loads
function init(){
	//show seconds in UI
	seconds.innerHTML = currentLevel;
	//load random word from array
	show_Word(words);
	//start matching on word input
	wordInput.addEventListener('input',startMatch);
	//call countdown
	setInterval(countDown,1000);
	//check game status
	setInterval(checkStatus, 50);

}
//start game
function startMatch(){
	if(matchWords()){
		isplaying = true;
		time = currentLevel + 1;
		show_Word(words);
		wordInput.value = '';
		score++;
	}
		//score is -1 display 0 so the game reloads score
	if(score == -1){
		scoreDisplay.innerHTML =0;
	}
	else{
		scoreDisplay.innerHTML = score;
	}
}

	

//match the current word to word input
function matchWords(){
	if(wordInput.value===currentWord.innerHTML){
		message.innerHTML = 'correct';
				return true;
	}else {
			message.innerHTML ='';
				return false;
	}

}
//pick & show random word
function show_Word(words) {
	//create a random index to pull word
	//generate random array using math to pick a random word
	//then making a pool of words by * wirds.length
	const randIndex = Math.floor(Math.random() * words.length);
	currentWord.innerHTML = words[randIndex];

}

//create countdown from timer
function countDown(){
	//cmake sure time is not run out by a condition
	if(time>0){
		//decrement time
		time--;

	}else if(time===0){
		//game over
		isplaying=false;	
	}
	//show time
	timeDisplay.innerHTML = time;

}
//check game status
function checkStatus(){
	//check for 2 things conditonal
	if(!isplaying && time===0){
		message.innerHTML-'Game Over';
		score = -1;
 }
}