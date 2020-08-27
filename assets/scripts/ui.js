const store = require('./store')


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
  $('#btn-logout').toggle()
  $('#login-form').trigger('reset')
  $('#login-form').hide()
  $('#register-form').hide()

}

const onLoginFailure = function () {
  $('#login-result').html('There was a problem logging you in - please check your Email address and Password, and try again!')
}

const onChangePasswordSuccess = function () {
  $('#change-password-result').html('You have successfully chaned your password')
}

const onChangePasswordFailure = function () {
  $('#change-password-result').html('There was a problem changing your password - please try again!')
}

const onLogoutSuccess = function () {
  $('#login-form').show()
  $('#btn-logout').toggle()
}

const onLogoutFailure = function () {
  console.log("Logout FAILURE")
}

module.exports = {
  onRegisterSuccess, onRegisterFailure, onLoginSuccess, onLoginFailure, onChangePasswordSuccess, onChangePasswordFailure, onLogoutSuccess, onLogoutFailure
}
