let cwidth = 600;
let cheight = 300;
let dicex = 50;
let dicey = 50;
let dicewidth = 100;
let diceheight = 100;
let dotrad = 6;
let canvasState;
let dx;
let dy;
let bank;
// Boolean to tell if this is the first roll(Rules are unique for the first roll)
let firstturn = true;
let point;
// cache html form used for output
let form = document.getElementById('f');

// Generate a number between 1 and 7 to simulate roll of a seven sided die
function numGen() {
	return Math.ceil(Math.random()*7)
}
function throwdice() {
	bank = Number(form.bank.value);
	if(bank < 5) {
		alert("You have run out of money!");
		return;
	} else if(bank > 5 && firstturn) {
		bank -= 10;
	} else {
		bank -=5;
	}

	form.bank.value = String(bank);


	let sum;
	let ch = [];
	// for loop used to call numGen twice and store result in an array to be used for drawing dice and calculating sum of roll
	for(let i = 0; i < 3; i++) {
		ch[i] = numGen();
	}
	// reduce method takes the two values in array ch and returns the sum, I prefer es6 when a callback is needed
sum = ch.reduce((a,b) => a + b);
dx = dicex;
dy = dicey;
// calls drawface function with the first stored value in ch
drawface(ch[0]);
dx = dicex + 150;
// calls drawface with the second stored value in ch
drawface(ch[1]);
dx = dicex + 300;
drawface(ch[2]);
if (firstturn) {
	// this switch is used to check if player won or lost on first throw
	switch(sum) {
		case 7:
		case 11:
		case 14:
		case 17:
			form.outcome.value="You win!";
			bank += 40;
			form.bank.value = String(bank);
			break;
		case 2:
		case 3:
		case 12:
		case 21:
			form.outcome.value="You lose!";
			break;
			// defaults to player not winning or losing and stores the sum of the roll to be used for 'player point'
		default:
			point = sum;
			form.pv.value=point;
			firstturn = false;
			form.stage.value="Need follow-up throw.";
			form.outcome.value="";
	}
}
// if this wasn't the first roll a new switch is used to check if player has won, lost, or will continue to roll
else {
	switch(sum) {
	case point:
		 form.outcome.value="You win!";
		 bank += 40;
		 form.bank.value = String(bank);
		 form.stage.value="Back to first throw.";
		 form.pv.value="";
		 firstturn = true;
		 break;
	case 7:
		 form.outcome.value="You lose!";
		 form.stage.value="Back to first throw.";
		 form.pv.value="";
		 firstturn = true;
	}
			}
}
// draws the seven different die faces
function drawface(n) {
	canvasState = document.getElementById('canvas').getContext('2d');
	canvasState.lineWidth = 5;
	canvasState.clearRect(dx,dy,dicewidth,diceheight);
	canvasState.strokeRect(dx,dy,dicewidth,diceheight);
	let dotx;
	let doty;
	canvasState.fillStyle = "rgb(247,14,35)";
	switch(n) {
		case 1:
		 draw1();
		 break;
		case 2:
		 draw2();
		 break;
		case 3:
		 draw2();
		 draw1();
		 break;
		case 4:
		 draw4();
		 break;
		case 5:
		 draw4();
		 draw1();
		 break;
		case 6:
		 draw4();
		 draw2mid();
		 break;
		case 7:
		 	draw1();
			draw4();
			draw2mid();
	}
}
function draw1() {
	let dotx;
	let doty;
	canvasState.beginPath();
	dotx = dx + .5*dicewidth;
	doty = dy + .5*diceheight;
	canvasState.arc(dotx,doty,dotrad,0,Math.PI*2,true);
	canvasState.closePath();
	canvasState.fill();
}
function draw2() {
	let dotx;
	let doty;
	canvasState.beginPath();
	dotx = dx + 3*dotrad;
	doty = dy + 3*dotrad;
	canvasState.arc(dotx,doty,dotrad,0,Math.PI*2,true);
	dotx = dx+dicewidth-3*dotrad;
	doty = dy+diceheight-3*dotrad;
	canvasState.arc(dotx,doty,dotrad,0,Math.PI*2,true);
	canvasState.closePath();
	canvasState.fill();
}
function draw4() {
	let dotx;
	let doty;
	canvasState.beginPath();
	dotx = dx + 3*dotrad;
	doty = dy + 3*dotrad;
	canvasState.arc(dotx,doty,dotrad,0,Math.PI*2,true);
	dotx = dx+dicewidth-3*dotrad;
	doty = dy+diceheight-3*dotrad;
	canvasState.arc(dotx,doty,dotrad,0,Math.PI*2,true);
	canvasState.closePath();
	canvasState.fill();
	canvasState.beginPath();
	dotx = dx + 3*dotrad;
	doty = dy + diceheight-3*dotrad;  //no change
	canvasState.arc(dotx,doty,dotrad,0,Math.PI*2,true);
	dotx = dx+dicewidth-3*dotrad;
	doty = dy+ 3*dotrad;
	canvasState.arc(dotx,doty,dotrad,0,Math.PI*2,true);
	canvasState.closePath();
	canvasState.fill();
}
function draw2mid() {
	let dotx;
	let doty;
	canvasState.beginPath();
	dotx = dx + 3*dotrad;
	doty = dy + .5*diceheight;
	canvasState.arc(dotx,doty,dotrad,0,Math.PI*2,true);
	dotx = dx+dicewidth-3*dotrad;
	doty = dy + .5*diceheight; //no change
	canvasState.arc(dotx,doty,dotrad,0,Math.PI*2,true);
	canvasState.closePath();
	canvasState.fill();
}
// cache button from craps.hmtl
let gameButton = document.querySelector('#game-button');
// add an eventlistener to call throwdice after a 'click'
gameButton.addEventListener('click',throwdice);
