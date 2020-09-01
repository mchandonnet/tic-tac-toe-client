
const config = require('./config')
const store = require('./store')

const apiCall = function (url, method, data, auth) {
  const ajaxCall = {
    url: config.apiUrl + url,
    method: method
  }

  if (auth) {
    ajaxCall.headers = {
      Authorization: 'Token token=' + store.user.token
    }
  }

  if (data) {
    ajaxCall.data = data
  }

  return $.ajax(ajaxCall)
}

module.exports = {
  apiCall
}
