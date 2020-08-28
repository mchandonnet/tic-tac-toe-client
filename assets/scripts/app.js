'use strict'

const events = require('./events')

$(() => {
  // Event listener for logout, register-form, login-form, and change-password-form
  $('#btn-logout').on('click', events.onLogout)
  $('#register-form').on('submit', events.onRegisterUser)
  $('#login-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)

  // Event listener to toggle the register and login function based on user request
  $('#anchor-register-user').on('click', function () {
    $('#login-form').hide(0)
    $('#register-form').show(750)
    // $('#register-form').toggle(500)
    // $('#login-form').toggle(500)
  })
  $('#anchor-login').on('click', function () {
    $('#register-form').hide(0)
    $('#login-form').show(750)
    // $('#register-form').toggle(1000)
    // $('#login-form').toggle(1000)
  })

  // Event Listener for btn-new-game, and btn-show-games
  $('#btn-new-game').on('click', events.onNewGame)
  $('#btn-show-games').on('click', events.onShowGames)
})
