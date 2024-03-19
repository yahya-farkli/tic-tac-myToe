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
function Gameboard (rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.board = [];
for (let i = 0; i < rows; i++) {
this.board.push(new Array(columns).fill(O))        
        
 }
 
}
var gameboard = new Gameboard(3,3);
console.log(gameboard.rows)

function Player(name, token) {
    this.name = name;
    this.token = token;
}

const player1 = new Player('yahya', 'X');
const player2 = new Player('Pc', 'O');