// Tic Tac Toe

// VIEW
var initializeBoard = function () {
  var board = document.getElementById('board');
  for (i = 0; i < board.rows.length; i++) {
    var rowData = board.rows.item(i).cells;
    for (var j = 0; j < rowData.length; j++) {
      rowData.item(j).innerText = '-';
    }
  }
}

var createWinText = function (winner) {
  var element = document.getElementById('winner');
  var para = document.createTextNode(winner + ' won!')
  element.appendChild(para);
}

var createFailText = function () {
  var element = document.getElementById('winner');
  var para = document.createTextNode('Board full. Reset to play again.')
  element.appendChild(para);
}

// Controller
var checkWin = function () {
  var board = document.getElementById('board');
  var data = [];
  for (i = 0; i < board.rows.length; i++) {
    var rowData = board.rows.item(i).cells;
    for (var j = 0; j < rowData.length; j++) {
      data.push(rowData.item(j).innerText);
    }
  }

  //win conditions
  if (data[0] === 'X' && data[1] === 'X' && data[2] === 'X' || data[0] === 'O' && data[1] === 'O' && data[2] === 'O') {
    return [true, data[0]];
  } else if (data[3] === 'X' && data[4] === 'X' && data[5] === 'X' || data[3] === 'O' && data[4] === 'O' && data[5] === 'O') {
    return [true, data[3]];
  } else if (data[6] === 'X' && data[7] === 'X' && data[8] === 'X' || data[6] === 'O' && data[7] === 'O' && data[8] === 'O') {
    return [true, data[6]];
  } else if (data[0] === 'X' && data[3] === 'X' && data[6] === 'X' || data[0] === 'O' && data[3] === 'O' && data[6] === 'O') {
    return [true, data[0]];
  } else if (data[1] === 'X' && data[4] === 'X' && data[7] === 'X' || data[1] === 'O' && data[4] === 'O' && data[7] === 'O') {
    return [true, data[1]];
  } else if (data[2] === 'X' && data[5] === 'X' && data[8] === 'X' || data[2] === 'O' && data[5] === 'O' && data[8] === 'O') {
    return [true, data[2]];
  } else if (data[0] === 'X' && data[4] === 'X' && data[8] === 'X' || data[0] === 'O' && data[4] === 'O' && data[8] === 'O') {
    return [true, data[0]];
  } else if (data[2] === 'X' && data[4] === 'X' && data[6] === 'X' || data[2] === 'O' && data[4] === 'O' && data[6] === 'O') {
    return [true, data[2]];
  } else if (data[0] !== '-' && data[1] !== '-' && data[2] !== '-' && data[3] !== '-' && data[4] !== '-' && data[5] !== '-' && data[6] !== '-' && data[7] !== '-' && data[8] !== '-') {
    return [false, 'Full'];
  } else {
    return [false];
  }
}

var nextPiece = function (piece) {
  if (piece === 'X') {
    game.currentPlayer = 'O';
  } else {
    game.currentPlayer = 'X';
  }
}

var game = {'currentPlayer': 'X',
            'initialize': initializeBoard,
            'win': createWinText,
            'fail': createFailText,
            'check': checkWin,
            'next': nextPiece};

document.querySelectorAll('#board td').forEach((element) => {
  element.addEventListener("click", (e) => {
    var winner = checkWin;
    if (winner()[0] === false && winner()[1] !== 'Full') {
      if (e.target.innerText === '-') {
        e.target.innerText = game.currentPlayer;
        nextPiece(game.currentPlayer);
      }
      if (winner()[0] === true) {
        createWinText(winner()[1]);
      }
      if (winner()[1] === 'Full') {
        createFailText();
      }
    }
  })
})

document.querySelectorAll('#reset').forEach((element) => {
  element.addEventListener("click", (e) => {
    initializeBoard();
    game.currentPlayer = 'X';
    var element = document.getElementById('winner');
    element.innerHTML = '';
  })
})
