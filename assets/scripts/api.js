
const config = require('./config')

const signUp = function (data) {
  // make an ajax call to the API to add the user
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

module.exports = {
  signUp: signUp
}
