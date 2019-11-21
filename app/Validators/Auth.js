'use strict'

class Auth {
  get rules () {
    return {
      email: 'required|email',
      password: 'required|min:4'
    }
  }

  get messages () {
    return {
      'email.required': 'You must provide a email address.',
      'email.email': 'You must provide a valid email address.',
      'password.required': 'You must provide a password',
      'password.min' : 'You must provude min 6 characters'
    }
  }
}

module.exports = Auth
