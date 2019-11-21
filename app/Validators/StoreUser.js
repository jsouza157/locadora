'use strict'

class StoreUser {
  get rules () {
    return {
      name: 'required', 
      email: 'required|email|unique:users',
      password: 'required|min:4'
    }
  }

  get messages () {
    return {
      'name.required': 'You must provide a name.',
      'email.required': 'You must provide a email address.',
      'email.email': 'You must provide a valid email address.',
      'email.unique': 'This email is already registered.',
      'password.required': 'You must provide a password',
      'password.min' : 'You must provude min 6 characters'
    }
  }
}

module.exports = StoreUser
