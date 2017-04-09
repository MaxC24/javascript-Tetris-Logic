/* TETRISSSS in Javascript*/

'use strict';

window.addEventListener('load', function(){

	var gameElement = document.getElementById('game');
	// render the table on the page.
	var domTable = createDomTable();
	gameElement.appendChild(domTable);

});

/* DOM FUNCTIONS */

//render the table on the DOM, should render it once then only update it when necessary.
function createDomTable() {
	var table = document.createElement("table");

	for(var i = 0; i < 22 ; i++) {
	  	var currentRow = document.createElement('tr');
		for(var j = 0; j < 10; j++) {
			var currentData = document.createElement('td');
			currentData.setAttribute('id', i+"-"+j);
			var text = document.createTextNode('0');
			currentData.appendChild(text);
			currentRow.appendChild(currentData);
		}
		table.appendChild(currentRow);
	}
	return table;
}




/* GAMES functions */

function Game(){
	this.gameTable = new Table();
	this.pause = false;
	this.over = false;
}

Game.prototype.start = function(){
	//create a set interval function that updates the game 
	//every second the shape has to move then the gameTable gets updated
	//if the user presses keys it should also force an update.
};

function Table() {
	this.table = createTable();
	this.currentShape = null;
}

Table.prototype.update = function() {
	if(this.currentShape) {
		this.currentShape.move();
	} else {
		this.insertShape(Dot);
	}
};

Table.prototype.updateDomTable = function(domTable) {

};

Table.prototype.insertShape = function(shape) {
	this.currentShape = new shape();
	//inserShapeInGameTable returns the shape coordinates:
	this.currentShape.coords.forEach(function(c){
		//change the 0 to 1 in the table where the shape is
		this.table[c[0]][c[1]] = '1';
	});
};



//NEEDS OOP REFACTORING ( Maybe )
function createTable() {
	//create the table
	var gameTable = [];
	//Nested for loop to create a bidimennsional Array.
	for(var i = 0; i < 22 ; i++) {
	  gameTable[i] = [];
		for(var j = 0; j < 10; j++) {
			gameTable[i][j] = '0';
		}
	}
	return gameTable;
}

/* SHAPES constructors */ 

function Shape(name, pos) {
	this.name = name;
	this.index = Math.floor(Math.random()*pos);
}

Shape.prototype.move = function() {
	this.coords = this.coords.map(function(c){
		c[0] = c[0]++;
	});
};

/* CREATE A DOT Object shape for debugging */

function Dot() {
	Shape.call(this, 'dot', 10);
	this.coords = [[3, this.index]];
}

/* END OF DOT */

function Square() {
	Shape.call(this, 'square', 8);
	//Square beginning coordinates
	this.coords = [[2, this.index],[2, this.index+1], [3, this.index], [3, this.index+1]];
}

Square.prototype.rotate = function() {
	this.coords = this.coords;
};

function Line() {
	Shape.call(this, 'line', 9);
	//Line beginning coordinates
	this.coords = [[0, this.index],[1, this.index], [2, this.index], [3, this.index]];
	//The Line shape default position: right
	this.position = 'right';
}



Line.prototype.rotate = function() {
	//coordinates definition:
	var y, x, newYCoords, newXCoords;
	switch(this.position) {
		//Rotate function for Line Shape:
		//The positions can be: up, right, down, left;
		//this is the default RIGHT position and pivotal point(*):
		// |    |    |  X  |    |
	    //
		// |    |    |  X  |    |
		//           *
		// |    |    |  X  |    |
	    //
		// |    |    |  X  |    |
		//Rotate line from right to down position:
		case 'right':
			x = this.coords[2][0];
			y = this.coords[2][1];
			// it should be possible to rotate even if the line is on the far left or far right
			//so in that case the pivotal point will change by 2 or 1 steps depending:
			if(y < 2) y = 2;
			if(y > 6) y = 6;
			newYCoords = [y-2, y-1, y, y+1];
			this.coords = this.coords.map(function(coord, i) {
				return [x, newYCoords[i]];
			});
			this.position = 'down';
		    //rotating the line in DOWN position from right:
			// |     |     |     |     |
		    //
			// |     |     |     |     |
			//             *
			// |  X  |  X  |  X  |  X  |
		    //
			// |     |     |     |     |
			//has the following coordinates: 
			break;
		//rotate the line from down to left:
		case 'down':
			x = this.coords[1][0];
			y = this.coords[1][1];
			if(x < 2) x = 2;
			if(x > 8) x = 8;
			newXCoords = [x-2, x-1, x, x+1];
			this.coords = this.coords.map(function(coord,i) {
				return [newXCoords[i], y];
			});
			this.position = 'left';
			//From down the Line rotate to a LEFT position:
			// |    |  X  |    |    |
		    //
			// |    |  X  |    |    |
			//           *
			// |    |  X  |    |    |
		    //
			// |    |  X  |    |    |
			break;
		case 'left':
			x = this.coords[1][0];
			y = this.coords[1][1];
			if(y < 1) y = 1;
			if(y > 5) y = 5;
			newYCoords = [y-1, y, y+1, y+2];
			this.coords = this.coords.map(function(coord, i){
				return [x, newYCoords[i]];
			});
			this.position = 'up';
			//From Left the Line rotate to a UP position:
			// |     |     |     |     |
		    //
			// |  X  |  X  |  X  |  X  |
			//             *
			// |     |     |     |     |
		    //
			// |     |     |     |     |
			break; 
		//rotate the LINE back to the beginning RIGHT position:
		case 'up':
			x = this.coords[1][0];
			y = this.coords[1][1];
			if(x < 1) x = 1;
			if(x > 7) x = 7;
			newXCoords = [x-1, x, x+1, x+2];
			this.coords = this.coords.map(function(coord, i){
				return [newXCoords[i], y];
			});
			this.position = 'right';
			break;
		default:
			this.coords = this.coords;
			break;
	}

};

function Elle() {
	Shape.call(this, 'Elle', 8);
	//Elle beginning coordinates
	this.coords = [[1, this.index], [2, this.index], [3, this.index],[3, this.index+1]];
	this.position = 'left';
}


// ELLE ROTATION
//   LEFT                      UP                         RIGHT                      DOWN
//  |  x  |     |     |  //   |  x  |  x  |  x  |   //   |     |  x  |  x  |   //   |     |     |     | 
//
//  |  X  |  *  |     |  //   |  x  |  *  |     |   //   |     |  *  |  x  |   //   |     |  *  |  x  | 
//             
//  |  x  |  x  |     |  //   |     |     |     |   //   |     |     |  x  |   //   |  x  |  x  |  x  | 



Elle.prototype.rotate = function() {
	var x, y, newYCoords, newXCoords;
	switch(this.position) {
		case 'left':
			x = this.coords[0][0];
			y = this.coords[0][1];
			if(y > 7) y = 7;
			this.coords = [[x, y], [x, y+1], [x, y+2], [x+1, y]];
			this.position = 'up';
			break;
		case 'up':
			x = this.coords[1][0];
			y = this.coords[1][1];
			this.coords = [[x, y],[x, y+1],[x+1, y+1],[x+2, y+1]];
			this.position = 'right';
			break;
		case 'right':
			x = this.coords[3][0];
			y = this.coords[3][1];
			if(x < 2) x = 2;
			this.coords = [[x-1, y],[x, y-2],[x, y-1],[x, y]];
			this.position = 'down';
			break;
		case 'down':
			x = this.coords[1][0];
			y = this.coords[1][1];
			this.coords = [[x-2, y],[x-1, y],[x, y],[x, y-1]];
			break;
		default:
			this.coords = this.coords;
			break;
	}
};


function Triangle() {
	Shape.call(this, 'triangle', 7);
	//Triangle beginning coordinates
	this.coords = [[3, this.index+1], [4, this.index], [4, this.index+1],[4, this.index+2]];
	this.position = 'down';
}

Triangle.prototype.rotate = function() {

};
