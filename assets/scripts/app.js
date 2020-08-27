'use strict'

const events = require('./events')

$(() => {
  // Event listener for logout, register-form, login-form, and change-password-form
  $('#register-form').on('submit', events.onRegisterUser)
  $('#login-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)
})
