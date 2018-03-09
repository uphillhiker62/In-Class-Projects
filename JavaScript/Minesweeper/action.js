
class Square {
    isDaBomb;
    isBlank;
    isNumber;
    clicked;
    flagged;

    constructor() {}
}

class GameBoard {
    numBobms;
    columns;
    rows;
    gameGrid;

    constructor() {
        this.numBobms = 10;
        this.columns = 10;
        this.rows = 10;
        this.gameGrid = [];

        for (let row = 0; row < this.rows;  row++) {
            let ourNewRow = [];

            for(let col = 0; col < this.columns; col++) {
                ourNewRow.push(new Square());
            }

            this.gameGrid.push(ourNewRow);
        }
    }
}

function getBoardHtml(gameBoard) {
    var boardHtml = 'div class="game-Board" id="game-board">';

    for (let row = 0; row < gameBoard.rows; row++) {
        let currRow = gameBoard[row];
        boardhtml += 'div class="square">';

        for(let col = 0; col < gameBoard.columns; col++) {
            let currSquare = gameBoard[columns];
            boardHtml += currSquare.toHtml();
        }
    }

    boardhtml += '</div>'

}

var testBoard = new GameBoard();
console.log("Hi");