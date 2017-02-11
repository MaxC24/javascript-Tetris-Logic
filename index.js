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

[o,o],
[o,o]

[o],
[o],
[o],
[o]

[o, x, x],
[o, o, o]

[x, o, x],
[o, o, o]

when a line is complete replace it with array of x.

*/

/* TETRISSSS */

document.addEventListener('load', function(){

	const gameElement = document.getElementById('game');


});

function createTable = function(element) {
	//create the table
	var gameTable = [];

	//nested for loop to create a bidimennsional Array.
	for(var i = 0; i < 8 ; i++) {
		for(var j = 0; j < 14; j++) {
			gameTable[i][j] = '0';
		}
	}
	return gameTable;
}

