const store = require('./store')
const gameplay = require('./gameplay')

// let currentGame

const onRegisterSuccess = function (res) {
  store.user = res.user
  // reset the login form and the registration form
  $('#login-form').trigger('reset')
  $('#register-form').trigger('reset')
  // display a message to the user, and redirect back to the login page after 5 seconds
  $('#registration-result').html(`Thanks for registering ${store.user.email}.  You are about to be redirected to the login page...`)
  setTimeout(function () {
    $('#register-form').hide()
    $('#login-form').show()
    $('#registration-result').html('')
  }, 5000)
}

const onRegisterFailure = function () {
  $('#registration-result').html('There was a problem registering your account - please check your Email address and Password, and try again!')
}

const onLoginSuccess = function (res) {
  store.user = res.user
  store.gameNumber = 0
  store.gameBoard = ['', '', '', '', '', '', '', '', '']
  store.record = [0, 0] // [wins, losses, ties]
  $('#login-result').html('')
  $('#login-form').trigger('reset')
  $('#login-form').hide()
  $('#register-form').hide()
  $('#navigation').show()
  $('#small-games').hide()
  $('#tic-tac-toe-board').show()
}

const onLoginFailure = function () {
  $('#login-result').html('Login failed - check your email address and password, and try again!')
}

const onChangePasswordSuccess = function () {
  $('#change-password-result').html('Password Changed - your will be redirected back to the game shortly...')
  setTimeout(() => {
    $('#change-password-form').trigger('reset')
    $('#login-form').trigger('reset')
    $('#register-form').trigger('reset')

    $('#register-form').hide()
    $('#login-form').hide()
    $('#change-password-form').hide()
    $('#tic-tac-toe-board').show()
    $('#small-games').hide()
    $('#change-password-result').html('')
  }, 5000)
}

const onChangePasswordFailure = function () {
  $('#change-password-result').html('There was a problem changing your password - please try again!')
}

const clearGameBoard = function () {
  for (let i = 0; i <= 8; i++) {
    $(`#contents-${i}`).html('')
  }
  store.activeGame = false
  store.activePlayer = ''
  store.currentGame = ''
  store.gameBoard = ['', '', '', '', '', '', '', '', '']
  store.gameNumber = 0
  store.record = [0, 0] // [wins, losses]

  $('#x-score').html(store.record[0])
  $('#o-score').html(store.record[1])
  $('#tie-score').html('0')
  $('#x-percentage').html('')
  $('#o-percentage').html('')
  $('#tie-percentage').html('')
  $('#game-alert-text').html('Click new game to start...')
}

const onLogoutSuccess = function (res) {
  clearGameBoard()
  $('#navigation').hide()
  $('#tic-tac-toe-board').hide()
  $('#small-games').hide()
  $('#change-password-form').hide()
  $('#login-form').show()
}

const onLogoutFailure = function () {
  $('#api-failure').html('Something went wrong with your logout request, please try again!')
}

const onNewGameSuccess = function (res) {
  store.currentGame = res.game._id
  gameplay.initializeGame()
}

const onNewGameFailure = function () {
  $('#api-failure').html('Something went wrong with your request, please try again!')
}

const onShowGamesSuccess = function (res) {
  $('#change-password-form').trigger('reset')
  $('#login-form').trigger('reset')
  $('#register-form').trigger('reset')

  $('#register-form').hide()
  $('#login-form').hide()
  $('#change-password-form').hide()
  $('#tic-tac-toe-board').hide()
  $('#small-games').show()

  let gamesHTML = ''
  gamesHTML = (`
    <div class="col-12"><br clear="all" /><br clear="all" /></div>
    <div class="col-12">You have played: ${res.games.length} games.  Click on any game to review it - if the game is unfinished, you will be able to complete the game!</div>
    <div class="col-12"><br clear="all" /><br clear="all" /></div>
    `)
  res.games.forEach(function (game) {
    const gameHTML = (`
    <div class='old-games col-md-3 col-12' id="${game._id}">
      <div class="row">
        <div class="col-3" id="0"></div>
        <div class="small-game-board-divs top-left col-2" id="0">${game.cells[0]}</div>
        <div class="small-game-board-divs top-mid col-2" id="1">${game.cells[1]}</div>
        <div class="small-game-board-divs top-right col-2" id="2">${game.cells[2]}</div>
        <div col-3" id="0"></div>
      </div>

      <div class="row">
        <div class="col-3" id="0"></div>
        <div class="small-game-board-divs mid-left col-2" id="0">${game.cells[3]}</div>
        <div class="small-game-board-divs col-2" id="1">${game.cells[4]}</div>
        <div class="small-game-board-divs mid-right col-2" id="2">${game.cells[5]}</div>
        <div col-3" id="0"></div>
      </div>

      <div class="row">
        <div class="col-3" id="0"></div>
        <div class="small-game-board-divs bot-left col-2" id="0">${game.cells[6]}</div>
        <div class="small-game-board-divs bot-mid col-2" id="1">${game.cells[7]}</div>
        <div class="small-game-board-divs bot-right col-2" id="2">${game.cells[8]}</div>
        <div col-3" id="0"></div>
      </div>

      <div class="row">
        <div class="col-12 small-game-board-divs game-spacer"></div>
      </div>              
    </div>
  `)
    gamesHTML += gameHTML
  })
  $('#small-games').html(gamesHTML)
}

const onShowGamesFailure = function () {
  $('#api-failure').html('Something went wrong with your request, please try again!')
}

module.exports = {
  onRegisterSuccess, onRegisterFailure, onLoginSuccess, onLoginFailure, onChangePasswordSuccess, onChangePasswordFailure, onLogoutSuccess, onLogoutFailure, onNewGameSuccess, onNewGameFailure, onShowGamesSuccess, onShowGamesFailure
}
