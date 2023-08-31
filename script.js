const gameBoardDiv = document.querySelector(".gameBoard");
const cells = document.querySelectorAll(".cell");


const gameBoard = (function() {
  const _gameBoard = ["", "", "",
                     "", "", "",
                     "", "", ""];

  const _renderGameBoard = () => {
    _gameBoard.forEach((cell, index) => {
      cells[index].textContent = cell;
    });
  }

  const addSymbol = (event, player) => {
    const cellIndex = event.target.id;
    if (!_gameBoard[cellIndex])
    _gameBoard[cellIndex] = player.symbol;
    _renderGameBoard();
  }

  return {
    playRound: function(event) {
      addSymbol(event, player2);
    }
  };
})();


function playerFactory(name, symbol) {
  return {name, symbol};
}

const player1 = playerFactory('Player1', "X");
const player2 = playerFactory('Player2', "O");


cells.forEach(cell => {
  cell.addEventListener("click", gameBoard.playRound);
})