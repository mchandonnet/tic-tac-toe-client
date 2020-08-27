'use strict'

const events = require('./events')

$(() => {
  // Event listener for logout, register-form, login-form, and change-password-form
  $('#btn-logout').on('click', events.onLogout)

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

  $('#register-form').on('submit', events.onRegisterUser)
  $('#login-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)
})
