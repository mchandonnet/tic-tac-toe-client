const store = require('./store')


const onRegisterSuccess = function (res) {
  // write user object to store.js
  store.user = res.user
  $('#registration-result').html(`Thanks for registering ${store.user.email}`)
  $('#register-form').hide()
  console.log('Success')
}

const onRegisterFailure = function () {
  $('#registration-result').html('There was a problem registering your account - please check your Email address and Password, and try again!')
  console.log('Error')
}

module.exports = {
  onRegisterSuccess: onRegisterSuccess,
  onRegisterFailure: onRegisterFailure
}
