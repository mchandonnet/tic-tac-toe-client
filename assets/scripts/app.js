'use strict'

const events = require('./events')
const gameplay = require('./gameplay')

$(() => {
  // Event listener for register-form, login-form, and change-password-form, logout, new-game and show-games
  $('#register-form').on('submit', events.onRegisterUser)
  $('#login-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#btn-logout').on('click', events.onLogout)
  $('#btn-new-game').on('click', events.onNewGame)
  $('#btn-show-games').on('click', events.onShowGames)

  // Event listener to toggle the register and login function based on user request
  // (cha, login, reg, small, tic)
  // events.views(false, false, false, false, false, login)
  $('#anchor-register-user').on('click', function () {
    events.views(false, false, true, false, false)
  })

  $('#anchor-login').on('click', function () {
    $('#registration-result').html('')
    events.views(false, true, false, false, false)
    $('#navigation').hide()
  })

  // Events listeners to toggle between game page and change password page
  $('#btn-change-password').on('click', function () {
    events.views(true, false, false, false, false)
  })

  $('#anchor-back-to-game').on('click', function () {
    $('#change-password-result').html('')
    events.views(false, false, false, false, true)
  })

  // Event listeners for Game Board (.one() ensures that an event handler cannot be used more than once!, but was hard to reinitialize!)
  for (let i = 0; i <= 8; i++) {
    $(`#${i}`).on('click', gameplay.onClickedBox)
  }
})
