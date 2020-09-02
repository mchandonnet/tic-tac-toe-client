'use strict'

const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const resetForms = function () {
  $('#change-password-form').trigger('reset')
  $('#login-form').trigger('reset')
  $('#register-form').trigger('reset')
}

const resetHTML = function () {
  $('#registration-result').html('')
  $('#login-result').html('')
  $('#change-password-result').html('')
  $('#api-failure').html('')
}

const views = function (cha, login, reg, small, tic) {
  if (cha) {
    $('#change-password-form').show()
  } else {
    $('#change-password-form').hide()
  }

  if (login) {
    $('#login-form').show()
  } else {
    $('#login-form').hide()
  }

  if (reg) {
    $('#register-form').show()
  } else {
    $('#register-form').hide()
  }

  if (small) {
    $('#small-games').show()
  } else {
    $('#small-games').hide()
  }

  if (tic) {
    $('#tic-tac-toe-board').show()
  } else {
    $('#tic-tac-toe-board').hide()
  }

  resetForms()
  $('#api-failure').html('')
}

const onRegisterUser = function (event) {
  // prevent the default action for the event
  event.preventDefault()
  // get the form from the event object
  const form = event.target
  // use getFormFields() to get the data from the form
  const data = getFormFields(form)
  // calling a function to register the user
  // api.signUp(data)
  api.apiCall('/sign-up', 'POST', data)
  // handle SUCCESSFUL response
    .then(ui.onRegisterSuccess)
  // handle ERROR response
    .catch(ui.onRegisterFailure)
}

const onSignIn = function (event) {
  // prevent default action for the event
  event.preventDefault()
  // get the form from event object
  const form = event.target
  // use getFormFields() to get the data from the form
  const data = getFormFields(form)
  // calling a function to login the user
  // api.signIn(data)
  api.apiCall('/sign-in', 'POST', data)
  // handle SUCCESSFUL response
    .then(ui.onLoginSuccess)
  // handle ERROR response
    .catch(ui.onLoginFailure)
}

const onChangePassword = function (event) {
  $('#api-failure').html('')
  // prevent default action for the event
  event.preventDefault()
  // get the data from the event object
  const form = event.target
  // use getFormFields() to get the data from the form
  const data = getFormFields(form)
  // calling a function to change the users password
  // api.changePassword(data)
  api.apiCall('/change-password', 'PATCH', data, true)
  // handle SUCCESSFUL response
    .then(ui.onChangePasswordSuccess)
  // handle ERROR response
    .catch(ui.onChangePasswordFailure)
}

const onLogout = function () {
  // api.logout()
  api.apiCall('/sign-out', 'DELETE', false, true)
  // handle SUCCESSFUL response
    .then(ui.onLogoutSuccess)
  // handle ERROR response
    .catch(ui.onLogoutFailure)
}

const onNewGame = function () {
  $('#api-failure').html('')
  api.apiCall('/games', 'POST', '{}', true)
  // handle SUCCESSFUL response
    .then(ui.onNewGameSuccess)
  // handle ERRROR response
    .catch(ui.onNewGameFailure)
}

const onShowGames = function () {
  $('#api-failure').html('')
  // api.showGames()
  api.apiCall('/games', 'GET', false, true)
  // handle SUCCESSFUL response
    .then(ui.onShowGamesSuccess)
  // handle ERRROR response
    .catch(ui.onShowGamesFailure)
}

module.exports = {
  onRegisterUser: onRegisterUser,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onLogout: onLogout,
  onNewGame: onNewGame,
  onShowGames: onShowGames,
  resetForms: resetForms,
  views: views,
  resetHTML: resetHTML
}
