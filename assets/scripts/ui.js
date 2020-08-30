const store = require('./store')
const app = require('./app')
const gameplay = require('./gameplay')

let currentGame

const onRegisterSuccess = function (res) {
  store.user = res.user
  $('#login-form').trigger('reset')
  // $('#registration-result').html(`Thanks for registering ${store.user.email}`)
  $('#register-form').hide()
  $('#login-form').hide()
  console.log('Success')
}

const onRegisterFailure = function () {
  $('#registration-result').html('There was a problem registering your account - please check your Email address and Password, and try again!')
  console.log('Error')
}

const onLoginSuccess = function (res) {
  store.user = res.user
  $('#control-buttons').show()
  $('#login-form').trigger('reset')
  $('#login-form').hide()
  $('#register-form').hide()
  // enable this later!
  // $('#games').show()
  // $('#tic-tac-toe-board').show()

}

const onLoginFailure = function () {
  $('#login-result').html('Login failed - check your email address and password, and try again!')
}

const onChangePasswordSuccess = function () {
  $('#change-password-result').html('You have successfully chaned your password and will be redirected back to the game')
  setTimeout(() => {
    $('#btn-logout').show()
    $('#btn-change-password').show()
    $('#games').show()
  }, 5000)
}

const onChangePasswordFailure = function () {
  $('#change-password-result').html('There was a problem changing your password - please try again!')
}

const onLogoutSuccess = function () {
  $('#login-form').show()
  $('#control-buttons').hide()
  $('#tic-tac-toe-board').hide()
  $('#games').hide()
  $('#change-password-form').hide()
}

const onLogoutFailure = function () {
  console.log("Logout FAILURE")
}

const onNewGameSuccess = function (res) {
  store.currentGame = res.game._id
  gameplay.initializeGame()
}

const onNewGameFailure = function (err) {
  console.log('Promise Failure' + err)
}

const onShowGamesSuccess = function (res) {
  let gamesHTML = ''
  res.games.forEach(function (game) { 
    const gameHTML = (`
    <p>${game.updatedAt}</p>
    <p>${game._id}</p>
    <p>${game.cells}</p>
  `)
    gamesHTML += gameHTML
  })
  $('#list-of-games-ul').html(gamesHTML)
}

const onShowGamesFailure = function (err) {
  console.log('Promise Failure' + err)
}

module.exports = {
  onRegisterSuccess, onRegisterFailure, onLoginSuccess, onLoginFailure, onChangePasswordSuccess, onChangePasswordFailure, onLogoutSuccess, onLogoutFailure, onNewGameSuccess, onNewGameFailure, onShowGamesSuccess, onShowGamesFailure
}
