/* [
//hidden:
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
//end hidden
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0]
]

create table first,
create objects moving down one line at the second.
<- onclick moves left
-> onclick moves right
spacebar onclick rotates clockwise.

moves downward

random figures:

[1,1],
[1,1]

[1],
[1],
[1],
[1]

[1, 0, 0],
[1, 1, 1]

[0, 1, 0],
[1, 1, 1]

when a line is complete replace it with array of 1.

*/

/* TETRISSSS */

'use strict';

document.addEventListener('load', function(){

	const gameElement = document.getElementById('game');

});


function createTable() {

	//create the table
	var gameTable = [];

	//Nested for loop to create a bidimennsional Array.
	for(var i = 0; i < 14 ; i++) {
	  gameTable[i] = [];
		for(var j = 0; j < 8; j++) {
			gameTable[i][j] = '0';
		}
	}
	return gameTable;
}

//inserShapeInGameTable returns the shape coordinates:
function insertShapeInGameTable(gameTable, shape) {
	//Remove the first 4 arrays in the gameTable with the shape:
	var coords = {};
	for(var i = 0; i < 4; i++) {
		//check if gameOver:
		if(gameTable[i].indexOf('1') > -1) gameOver();
		for(var j = 0; j < 8; j++) {
			gameTable[i][j] = shape[i][j];
		}
	}
}

/* Create SHAPES! */ 

function Shape(name) {
	this.name = name;
	this.index = Math.floor(Math.random()*7);
}

Shape.prototype.move = function() {
	this.coords = this.coords.map(function(c){
		c[0] = c[0]++;
	})
}

function Square() {
	// //random index where to spawn the square:
	// var index = Math.floor(Math.random()*7);

	// //create square represantation array;
	// var square = [];

	// for(var i = 0; i < 4; i++) {
	// 	square[i] = [];
	// 	for(var j = 0; j < 8; j++) {	
	// 			if(i > 1 && (j === index || j === index+1)) square[i][j] = '1'
	// 			else square[i][j] = '0'
	// 	}
	// }
	// return square;

	/* NEW IMPLEMENTATION */
	Shape.call(this, 'square');

	//save the coordinates 
	this.coords = [[2, this.index],[2, this.index+1], [3, this.index], [3, this.index+1]];
}

Square.prototype.move = function() {
	this.coords = this.coords;
}

function createLine() {
	//random index where to spawn the line:
	var index = Math.floor(Math.random()*8);

	//create line represantation array;
	var line = [];

	for(var i = 0; i < 4; i++) {
		line[i] = [];
		for(var j = 0; j < 8; j++) {	
				if(i > 0 && (j === index)) line[i][j] = '1'
				else line[i][j] = '0'
		}
	}
	return line;
}

function createElle() {
	//random index where to spawn the elle:
	var index = Math.floor(Math.random()*7);

	//create elle represantation array;
	var elle = [];

	for(var i = 0; i < 4; i++) {
		elle[i] = [];
		for(var j = 0; j < 8; j++) {	
				if(i > 0 && (j === index) || i === 3 && (j=== index + 1)) elle[i][j] = '1'
				else elle[i][j] = '0'
		}
	}
	return elle;
}

function createTriangle() {
	//random index where to spawn the triangle:
	var index = Math.floor(Math.random()*6) + 1;

	//create triangle represantation array;
	var triangle = [];

	for(var i = 0; i < 4; i++) {
		triangle[i] = [];
		for(var j = 0; j < 8; j++) {	
				if(i > 1 && (j === index) || 
				   i === 3 && ((j=== index + 1) || 
				   (j=== index - 1))) triangle[i][j] = '1'
				else triangle[i][j] = '0'
		}
	}
	return triangle;
}

/* GAMES functions */

function gamePause() {

}

function gameStart(gameTable) {

}

function gameOver() {
	alert('You Lost!');
}


