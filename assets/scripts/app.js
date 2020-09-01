'use strict'

const events = require('./events')
const gameplay = require('./gameplay')

$(() => {
  // Event listener for logout, register-form, login-form, and change-password-form
  $('#register-form').on('submit', events.onRegisterUser)
  $('#login-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)

  // Event listener to toggle the register and login function based on user request
  $('#anchor-register-user').on('click', function () {
    $('#change-password-form').trigger('reset')
    $('#login-form').trigger('reset')
    $('#register-form').trigger('reset')

    $('#navigation').hide()
    $('#register-form').show()
    $('#login-form').hide()
    $('#change-password-form').hide()
    $('#tic-tac-toe-board').hide()
    $('#small-games').hide()
  })

  $('#anchor-login').on('click', function () {
    $('#change-password-form').trigger('reset')
    $('#login-form').trigger('reset')
    $('#register-form').trigger('reset')

    $('#navigation').hide()
    $('#register-form').hide()
    $('#login-form').show()
    $('#change-password-form').hide()
    $('#tic-tac-toe-board').hide()
    $('#small-games').hide()
  })

  // Events listeners to toggle between game page and change password page
  $('#btn-change-password').on('click', function () {
    $('#change-password-form').trigger('reset')
    $('#login-form').trigger('reset')
    $('#register-form').trigger('reset')

    $('#register-form').hide()
    $('#login-form').hide()
    $('#change-password-form').show()
    $('#tic-tac-toe-board').hide()
    $('#small-games').hide()
  })

  $('#anchor-back-to-game').on('click', function () {
    $('#change-password-form').trigger('reset')
    $('#login-form').trigger('reset')
    $('#register-form').trigger('reset')

    $('#register-form').hide()
    $('#login-form').hide()
    $('#change-password-form').hide()
    $('#tic-tac-toe-board').show()
    $('#small-games').hide()
  })

  // Event Listener for btn-logout, btn-change-password, btn-new-game, and btn-show-games
  $('#btn-logout').on('click', events.onLogout)
  $('#btn-new-game').on('click', events.onNewGame)
  $('#btn-show-games').on('click', events.onShowGames)

  // Event listeners for Game Board (.one() ensures that an event handler cannot be used more than once!, but was hard to reinitialize!)
  for (let i = 0; i <= 8; i++) {
    $(`#${i}`).on('click', gameplay.onClickedBox)
  }
})
