'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/models/User')

class UserSeeder {
  async run () {
    await User.create({
      name: 'Admin',
      email : 'admin@admin.com',
      password : '1234'
    })
  }
}

module.exports = UserSeeder
