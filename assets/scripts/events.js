'use strict'

const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onRegisterUser = function (event) {
  // prevent the default action for the event
  event.preventDefault()
  // get the form from the event object
  const form = event.target
  // use getFormFields() to get the data from the form
  const data = getFormFields(form)
  // calling a function to register the user
  api.signUp(data)
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
  api.signIn(data)
  // handle SUCCESSFUL response
    .then(ui.onLoginSuccess)
  // handle ERROR response
    .catch(ui.onLoginFailure)
}

const onChangePassword = function (event) {
  // prevent default action for the event
  event.preventDefault()
  // get the data from the event object
  const form = event.target
  // use getFormFields() to get the data from the form
  const data = getFormFields(form)
  // calling a function to change the users password
  api.changePassword(data)
  // handle SUCCESSFUL response
    .then(ui.onChangePasswordSuccess)
  // handle ERROR response
    .catch(ui.onChangePasswordFailure)
}

const onLogout = function () {
  api.logout()
  // handle SUCCESSFUL response
    .then(ui.onLogoutSuccess)
  // handle ERROR response
    .catch(ui.onLogoutFailure)

}

module.exports = {
  onRegisterUser, onSignIn, onChangePassword, onLogout
}
