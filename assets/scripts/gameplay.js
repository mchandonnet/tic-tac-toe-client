const store = require('./store')
const api = require('./api')
const events = require('./events')

// define a set of game variables that indicate the game has not started yet
let gameNumber = 0
let record = [0, 0] // [wins, losses]
let activePlayer, winner, messageText
let activeGame = false
let gameBoard = []
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const initializeGame = function () {
  $('#tic-tac-toe-board').show()
  gameNumber++
  activePlayer = 'X'
  activeGame = true
  // clear the array for a new game
  gameBoard = ['', '', '', '', '', '', '', '', '']
  // clear the game board
  for (let i = 0; i <= 8; i++) {
    $(`#contents-${i}`).html('')
  }
  $('#game-alert-text').html('')
}

// check to see if the array is full... this would indicate the game is over!
const arrayIsFull = function () {
  return gameBoard.some(el => el === '')
}

const checkWinningCombos = function () {
  let newArray
  winningCombos.forEach(el => {
    newArray = []
    el.forEach(item => {
      newArray.push(gameBoard[item])
    })
    if ((newArray[0] === newArray[1]) && (newArray[1] === newArray[2]) && (newArray[0] !== '')) {
      // someone has won the game!
      activeGame = false
      winner = activePlayer
      messageText = `Game Over!  ${winner} has won this game!`
      // $('#game-alert-text').html(`Game Over!  ${winner} has won this game!`)
    } else if (!arrayIsFull()) {
      // If checkFullArray returns TRUE, then the array is not full and the game is NOT over
      messageText = 'Game Over!  This game has ended in a tie!'
      activeGame = false
      // $('#game-alert-text').html('Game Over!  This game has ended in a tie!')
    }
  })
}

const onClickedBox = function () {
  // check that the player selected a valid space
  // ** THe game must be active, and the space selected must be empty
  if ((activeGame) && (gameBoard[event.target.id] === '')) {
    // Manipulate the DOM to place the active player symbol in the selected box
    gameBoard[event.target.id] = activePlayer
    // clear any previous alerts
    messageText = ''
    if (activePlayer === 'X') {
      $(`#contents-${event.target.id}`).css('color', '#CB5D15')
    } else if (activePlayer === 'O') {
      $(`#contents-${event.target.id}`).css('color', '#1583CB')
    }
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
    api.apiCall(url, 'PATCH', data, true)
      .then(onUpdateGameSuccess)
      .catch(onUpdateGameFailure)

    // Check for a winner
    checkWinningCombos()
    activePlayer === 'X' ? activePlayer = 'O' : activePlayer = 'X'

    // if not, send an error
  } else if ((activeGame) && (gameBoard[event.target.id] !== '')) {
    messageText = 'Spot already take - please select another spot'
    // $('#game-alert-text').html('Please select a valid spot!')
  }

  console.log('Game Number: ' + gameNumber)
  console.log('Active Player: ' + activePlayer)
  console.log('Active Game: ' + activeGame)
  console.log('Game Board: ' + gameBoard)
  console.log('Game id: ' + store.currentGame)

  $('#game-alert-text').html(messageText)
}

const onUpdateGameSuccess = function () {
}

const onUpdateGameFailure = function () {
  console.log('Failure')
}

module.exports = {
  onClickedBox, initializeGame
}
