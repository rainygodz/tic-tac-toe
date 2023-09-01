const gameBoardDiv = document.querySelector(".gameBoard");
const cells = document.querySelectorAll(".cell");
const player1Score = document.querySelector("#p1-score");
const player2Score = document.querySelector("#p2-score")


const gameBoard = (function() {
  let _gameBoard = ["", "", "",
                     "", "", "",
                     "", "", ""];

  const isFull = () => {
    let filled = true;
    cells.forEach(cell => {
      if (cell.textContent === "") {
        filled = false;
      }
    });

    return filled;
  }

  const resetGameBoard = () => {
    _gameBoard = ["", "", "",
                  "", "", "",
                  "", "", ""];
    _renderGameBoard();
  }

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
    addSymbol: function(event, player) {
      addSymbol(event, player);
    },
    isFull: function() {
      return isFull();
    },
    resetGameBoard: function() {
      resetGameBoard();
    }
  };
})();


const game = (function() {
  const player1 = playerFactory('Player1', "X");
  const player2 = playerFactory('Player2', "O");
  let p1Score = 0;
  let p2Score = 0;

  const playRound = (event) => {
    console.log(gameBoard.isFull());
    if (gameBoard.isFull()) {
      gameBoard.resetGameBoard();
    } else {
      gameBoard.addSymbol(event, player1);
    }
  }

  return {
    playRound: function(event) {
      playRound(event);
    }
  }
})();


function playerFactory(name, symbol) {
  return {name, symbol};
}

cells.forEach(cell => {
  cell.addEventListener("click", game.playRound);
})