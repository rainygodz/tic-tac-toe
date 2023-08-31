const gameBoardDiv = document.querySelector(".gameBoard");
const cells = document.querySelectorAll(".cell");


const gameBoard = (function() {
  const _gameBoard = ["X", "O", "X",
                     "O", "O", "X",
                     "O", "X", "O"];

  const _getGameBoard = () => {
    _gameBoard.forEach((cell, index) => {
      cells[index].textContent = cell;
    });
  }

  return {
    renderGameBoard: function() {
      _getGameBoard();
    }
  };
})();

gameBoard.renderGameBoard();