/* BOY where do i start from ? So i want 
to make a tictactoe game is hould first 
focuson the consle right? */
/* First step: 
Set up your project with HTML, CSS and Javascript files and get the Git repo all set up.
----->DONE */
/* Second step: 
You’re going to store the gameboard as an array inside of a Gameboard object, so start there! Your players are also going to be stored in objects, and you’re probably going to want an object to control the flow of the game itself.
Your main goal here is to have as little global code as possible. Try tucking as much as you can inside factories. If you only need a single instance of something (e.g. the gameboard, the displayController etc.) then wrap the factory inside an IIFE (module pattern) so it cannot be reused to create additional instances.
*/
/* function Gameboard (rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.board = [];
for (let i = 0; i < rows; i++) {
this.board.push(new Array(columns).fill(0))        
        
 }
 
}
var gameboard = new Gameboard(3,3);
console.log(gameboard.board)

const putToken = (column, player) => {
    const availableCol = board.filter((rows) => row[columns].getValue() === 0).map(rows => rows[columns]);
    if (!availableCol.length) {
        return
    }
    const lowestRow = availableCells.length - 1;
    board[lowestRow][columns].addToken(player);
};

function Player(name, token) {
    this.name = name;
    this.token = token;
}
function getPlayers() {
const player1 = new Player('yahya', 'X');
const player2 = new Player('Pc', 'O');
    this.players = [];
    this.players.push(player1)
    this.players.push(player2)
     console.log(this.players)
}
let activePlayer = players[0];

 */

function Gameboard(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.board = [];
    for (let i = 0; i < rows; i++) {
        this.board.push(new Array(columns).fill(0));
    }
}

var gameboard = new Gameboard(3, 3);
console.log(gameboard.board);
let grid = gameboard.board

    // Check if the value at the specified intersection is 0
const putToken = (grid, rowIndex, colIndex, player) => {
    if (grid[rowIndex][colIndex] != 0) {
        return "wrong move bud"
    } else {
        grid[rowIndex][colIndex] = player.token;
    }
};

function Player(name, token) {
    this.name = name;
    this.token = token;
}
function getPlayers() {
    const player1 = new Player('yahya', 'X');
    const player2 = new Player('Pc', 'O');
    return [player1, player2];
}
function switchPlayers() {
 
let players = getPlayers();
let activePlayerIndex = 0;
let activePlayer = players[activePlayerIndex];
// Switch to the next player
activePlayerIndex = 1 - activePlayerIndex; // Toggle between 0 and 1
activePlayer = players[activePlayerIndex];   
return activePlayer; // Return the updated active player
}

let activePlayer = switchPlayers();

//just to check 
console.log(putToken(gameboard.board, 0, 0, activePlayer));
const switchPlayer = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
};