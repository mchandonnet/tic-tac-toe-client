
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
  apiCall //signUp, signIn, changePassword, logout, newGame, showGames, 
}

/*
Original functions for making API calls - replaced with a single DRY function!

const signUp = function (data) {
  // make an ajax call to the API to add the user
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const logout = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

const showGames = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
*/