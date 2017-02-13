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

function Shape(name, pos) {
	this.name = name;
	this.index = Math.floor(Math.random()*pos);
}

Shape.prototype.move = function() {
	this.coords = this.coords.map(function(c){
		c[0] = c[0]++;
	})
}

function Square() {
	Shape.call(this, 'square', 7);
	//Square beginning coordinates
	this.coords = [[2, this.index],[2, this.index+1], [3, this.index], [3, this.index+1]];
}

Square.prototype.rotate = function() {
	this.coords = this.coords;
}

function Line() {
	Shape.call(this, 'line', 7);
	//Line beginning coordinates
	this.coords = [[1, this.index],[2, this.index], [3, this.index], [4, this.index]];
}

Line.prototype.rotate = function() {

}

function Elle() {
	Shape.call(this.'Elle', 6);
	//Elle beginning coordinates
	this.coords = [[2, this.index], [3, this.index], [4, this.index],[4, this.index+1]];
}

Elle.prototype.rotate = function() {

}



function Triangle() {
	// //random index where to spawn the triangle:
	// var index = Math.floor(Math.random()*6) + 1;

	// //create triangle represantation array;
	// var triangle = [];

	// for(var i = 0; i < 4; i++) {
	// 	triangle[i] = [];
	// 	for(var j = 0; j < 8; j++) {	
	// 			if(i > 1 && (j === index) || 
	// 			   i === 3 && ((j=== index + 1) || 
	// 			   (j=== index - 1))) triangle[i][j] = '1'
	// 			else triangle[i][j] = '0'
	// 	}
	// }
	// return triangle;
	Shape.call(this, 'triangle', 6);

	this.coords = [[3, this.index+1], [4, this.index], [4, this.index+1],[4, this.index+2]];
}

/* GAMES functions */

function gamePause() {

}

function gameStart(gameTable) {

}

function gameOver() {
	alert('You Lost!');
}


