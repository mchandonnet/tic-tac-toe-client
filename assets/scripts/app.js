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
    $('#login-form').hide(0)
    $('#register-form').show(0)
    // $('#register-form').toggle(500)
    // $('#login-form').toggle(500)
  })
  $('#anchor-login').on('click', function () {
    $('#register-form').hide(0)
    $('#login-form').show(0)
    // $('#register-form').toggle(1000)
    // $('#login-form').toggle(1000)
  })

  // Events listeners to toggle between game page and change password page
  $('#btn-change-password').on('click', function () {
    console.log("Change Password")
    $('#games').hide()
    $('#change-password-form').show(0)
  })



  // Event Listener for btn-logout, btn-change-password, btn-new-game, and btn-show-games
  $('#btn-logout').on('click', events.onLogout)
  $('#btn-new-game').on('click', events.onNewGame)
  $('#btn-show-games').on('click', events.onShowGames)

  // Event listeners for Game Board (.one() ensures that an event handler cannot be used more than once!, but was hard to reinitialize!)
  for (let i = 0; i <= 8; i++) {
    $(`#${i}`).on('click', gameplay.onClickedBox)
  }

  // $('#0').one('click', gameplay.onClickedBox)
  // $('#1').one('click', gameplay.onClickedBox)
  // $('#2').one('click', gameplay.onClickedBox)
  // $('#3').one('click', gameplay.onClickedBox)
  // $('#4').one('click', gameplay.onClickedBox)
  // $('#5').one('click', gameplay.onClickedBox)
  // $('#6').one('click', gameplay.onClickedBox)
  // $('#7').one('click', gameplay.onClickedBox)
  // $('#8').one('click', gameplay.onClickedBox)
})
