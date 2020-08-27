'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./events')
const ui = require('./ui')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Event listener for register-form
  $('#register-form').on('submit', events.onRegisterUser)
  $('#login-form').on('submit', events.onSignIn)
})
