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
	//The Line shape default position: right
	this.position = 'right';
}

//Rotate function for Line Shape:
	//The positions can be: up, right, down, left;
	//example of right position and pivotal point(*):
	// |    |    |  X  |    |
    //
	// |    |    |  X  |    |
	//           *
	// |    |    |  X  |    |
    //
	// |    |    |  X  |    |

Line.prototype.rotate = function() {
	swith(this.position) {
		case 'right':
			//rotating the line in 'down' position the element that remain is position
			//has the following coordinates:
			var x = this.coords[3][0];
			var y = this.coords[3][1];
			// it should be possible to rotate even if the line is on the far left or far right
			//so in that case the pivotal point will change by 2 or 1 steps depending:
			if(y < 2) y = 2;
			if(y > 7) y = 7;
			var newYCoords = [y-2, y-1, y, y+1];
			this.coords = this.coords.map(function(coord, i) {
				return [x, newCoords[i]];
			})
			this.position = 'down';
			break;
		case 'down':
			break;
		case 'left':
			break;
		case 'top':
			break;
	}

}

function Elle() {
	Shape.call(this.'Elle', 6);
	//Elle beginning coordinates
	this.coords = [[2, this.index], [3, this.index], [4, this.index],[4, this.index+1]];
}

Elle.prototype.rotate = function() {

}


function Triangle() {
	Shape.call(this, 'triangle', 6);
	//Triangle beginning coordinates
	this.coords = [[3, this.index+1], [4, this.index], [4, this.index+1],[4, this.index+2]];
}

Triangle.prototype.rotate = function() {

}

/* GAMES functions */

function gamePause() {

}

function gameStart(gameTable) {

}

function gameOver() {
	alert('You Lost!');
}


