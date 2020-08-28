const store = require('./store')
const api = require('./api')
const events = require('./events')

// define a variable for starting the game - X always starts!
// let game = true
let activePlayer = "X"
let gameBoard = ['', '', '', '', '', '', '', '', '']
let gameOver = false
let winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const checkWinningCombos = function () {
  // winningCombos.forEach(el => { // })
}

const onUpdateGameSuccess = function (res) {
  console.log(res)
}

const onUpdateGameFailure = function () {
  console.log('Failure')
}

const onClickedBox = function () {
  // Update the space with the X or O

  if ((!gameOver) && (gameBoard[event.target.id] === '')) {
    gameBoard[event.target.id] = activePlayer

    console.log(checkWinningCombos())

    $(`#contents-${event.target.id}`).html(`${activePlayer}`)

    // Create a JSON data variable to store the data passed to the API
    const url = '/games/' + store.currentGame
    const data = {
      game: {
        cell: {
          index: `${event.target.id}`,
          value: `${activePlayer}`
        },
        over: false
      }
    }

    // Update the API with a game ID, an array index, and a player value (X,O)  
    // api.apiCall(url, 'PATCH', data, true)
    //   .then(onUpdateGameSuccess)
    //   .catch(onUpdateGameFailure)
    // check to see if there is a winner

    // if not change to the next users turn
    // use a function here for game controll
    activePlayer === 'X' ? activePlayer = 'O' : activePlayer = 'X'
    console.log(event.target.id)
    console.log(gameBoard)

    // if yes update the API to close game
    // disable the game board
    // then show a message indicating the winner
  }
}

module.exports = {
  onClickedBox
}
