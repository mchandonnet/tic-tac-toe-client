const store = require('./store')
const api = require('./api')

// define a set of game variables that indicate the game has not started yet
store.gameNumber = 0
store.record = [0, 0] // [wins, losses]
store.activePlayer = ''
let winner, messageText
store.activeGame = false
store.gameBoard = []
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
  for (let i = 0; i <= 8; i++) {
    $(`#contents-${i}`).html('')
  }

  $('#change-password-form').trigger('reset')
  $('#login-form').trigger('reset')
  $('#register-form').trigger('reset')

  $('#register-form').hide()
  $('#login-form').hide()
  $('#change-password-form').hide()
  $('#tic-tac-toe-board').show()
  $('#small-games').hide()

  store.gameNumber++
  store.activePlayer = 'X'
  store.activeGame = true
  // clear the array for a new game
  store.gameBoard = ['', '', '', '', '', '', '', '', '']

  $('#game-alert-text').html('Waiting for X to make a play!')
}

// check to see if the array is full... this would indicate the game is over!
const arrayIsFull = function () {
  return store.gameBoard.some(el => el === '')
}

const calcPercentage = function (arr, total) {
  $('#x-score').html(store.record[0])
  $('#o-score').html(store.record[1])
  $('#tie-score').html(total - (arr[0] + arr[1]))
  const xPercentage = ((arr[0] / total) * 100)
  const oPercentage = ((arr[1] / total) * 100)
  const tiePercentage = (((total - (arr[0] + arr[1])) / total) * 100)
  $('#x-percentage').html(Math.floor(xPercentage) + '%')
  $('#o-percentage').html(Math.floor(oPercentage) + '%')
  $('#tie-percentage').html(Math.floor(tiePercentage) + '%')
}

const checkWinningCombos = function () {
  let newArray
  winningCombos.forEach(el => {
    newArray = []
    el.forEach(item => {
      newArray.push(store.gameBoard[item])
    })
    if ((newArray[0] === newArray[1]) && (newArray[1] === newArray[2]) && (newArray[0] !== '')) {
      // someone has won the game!
      store.activeGame = false
      winner = store.activePlayer
      messageText = `Game Over!  ${winner} has won this game!`
      if (winner === 'X') {
        store.record[0]++
        return calcPercentage(store.record, store.gameNumber)
      } else if (winner === 'O') {
        store.record[1]++
        return calcPercentage(store.record, store.gameNumber)
      }
    } else if (!arrayIsFull() && (store.activeGame)) {
      // If checkFullArray returns TRUE, then the array is not full and the game is NOT over
      messageText = 'Game Over!  This game has ended in a tie!'
      store.activeGame = false
      return calcPercentage(store.record, store.gameNumber)
    }

    $('#game-alert-text').html(messageText)

  })
}

const onClickedBox = function () {
  // check that the player selected a valid space
  // ** The game must be active, and the space selected must be empty
  if ((store.activeGame === true) && (store.gameBoard[event.target.id] === '')) {
    // Manipulate the DOM to place the active player symbol in the selected box
    store.gameBoard[event.target.id] = store.activePlayer
    // clear any previous alerts

    if (store.activePlayer === 'X') {
      $(`#contents-${event.target.id}`).css('color', '#CB5D15')
    } else if (store.activePlayer === 'O') {
      $(`#contents-${event.target.id}`).css('color', '#1583CB')
    }
    $(`#contents-${event.target.id}`).html(`${store.activePlayer}`)

    checkWinningCombos()

    // Create a JSON data variable to store the data passed to the API
    const url = '/games/' + store.currentGame
    const data = {
      game: {
        cell: {
          index: `${event.target.id}`,
          value: `${store.activePlayer}`
        },
        over: store.activeGame
      }
    }

    // Update the API with a game ID, an array index, and a player value (X,O)
    api.apiCall(url, 'PATCH', data, true)
      .then(onUpdateGameSuccess)
      .catch(onUpdateGameFailure)

    store.activePlayer === 'X' ? store.activePlayer = 'O' : store.activePlayer = 'X'

    if (store.activeGame) {
      messageText = `Waiting for ${store.activePlayer} to make a play...`
      $('#game-alert-text').html(messageText)
    }

    // if not, send an error
  } else if ((store.activeGame) && (store.gameBoard[event.target.id] !== '')) {
    messageText = 'Spot already take - please select another spot'
    $('#game-alert-text').html(messageText)
  }
}

const onUpdateGameSuccess = function () {
}

const onUpdateGameFailure = function () {
  $('#api-failure').html('Something went wrong with your logout request, please try again!')
}

module.exports = {
  onClickedBox, initializeGame
}
