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
    _gameBoard[cellIndex] = player.symbol;
    _renderGameBoard();
  }

  const getGameBoard = () => {
    return _gameBoard;
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
    },
    getGameBoard: function() {
      return getGameBoard();
    }
  };
})();


const game = (function() {
  const player1 = playerFactory('Player1', "X");
  const player2 = playerFactory('Player2', "O");
  let p1Score = 0;
  let p2Score = 0;
  let playerTurn = 1;

  const playRound = (event) => {
    const cell = event.target.textContent;
    if (gameBoard.isFull()) {
      gameBoard.resetGameBoard();
      playerTurn = 1;
    } else {
      if (playerTurn === 1) {
        if (!cell) {
          gameBoard.addSymbol(event, player1);
          let currentGameBoard = gameBoard.getGameBoard();
          console.log(gameBoard.getGameBoard());
          if (
            (currentGameBoard[0] === player1.symbol && currentGameBoard[1] === player1.symbol && currentGameBoard[2] === player1.symbol)
            || (currentGameBoard[3] === player1.symbol && currentGameBoard[4] === player1.symbol && currentGameBoard[5] === player1.symbol)
            || (currentGameBoard[6] === player1.symbol && currentGameBoard[7] === player1.symbol && currentGameBoard[8] === player1.symbol)
            || (currentGameBoard[0] === player1.symbol && currentGameBoard[3] === player1.symbol && currentGameBoard[6] === player1.symbol)
            || (currentGameBoard[1] === player1.symbol && currentGameBoard[4] === player1.symbol && currentGameBoard[7] === player1.symbol)
            || (currentGameBoard[2] === player1.symbol && currentGameBoard[5] === player1.symbol && currentGameBoard[8] === player1.symbol)
            || (currentGameBoard[0] === player1.symbol && currentGameBoard[4] === player1.symbol && currentGameBoard[8] === player1.symbol)
            || (currentGameBoard[2] === player1.symbol && currentGameBoard[4] === player1.symbol && currentGameBoard[6] === player1.symbol)
            ) {
              console.log('nice');
            gameBoard.resetGameBoard();
            player1Score.textContent = ++p1Score;
            playerTurn = 1;
          } else {
            playerTurn = 2;
          }
        }
      } else if (playerTurn === 2) {
        if (!cell) {
          gameBoard.addSymbol(event, player2);
          let currentGameBoard = gameBoard.getGameBoard();
          if (
            (currentGameBoard[0] === player2.symbol && currentGameBoard[1] === player2.symbol && currentGameBoard[2] === player2.symbol)
            || (currentGameBoard[3] === player2.symbol && currentGameBoard[4] === player2.symbol && currentGameBoard[5] === player2.symbol)
            || (currentGameBoard[6] === player2.symbol && currentGameBoard[7] === player2.symbol && currentGameBoard[8] === player2.symbol)
            || (currentGameBoard[0] === player2.symbol && currentGameBoard[3] === player2.symbol && currentGameBoard[6] === player2.symbol)
            || (currentGameBoard[1] === player2.symbol && currentGameBoard[4] === player2.symbol && currentGameBoard[7] === player2.symbol)
            || (currentGameBoard[2] === player2.symbol && currentGameBoard[5] === player2.symbol && currentGameBoard[8] === player2.symbol)
            || (currentGameBoard[0] === player2.symbol && currentGameBoard[4] === player2.symbol && currentGameBoard[8] === player2.symbol)
            || (currentGameBoard[2] === player2.symbol && currentGameBoard[4] === player2.symbol && currentGameBoard[6] === player2.symbol)
            ) {
            gameBoard.resetGameBoard();
            player2Score.textContent = ++p2Score;
            playerTurn = 1;
          } else {
            playerTurn = 1;
          }
        }
      }
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