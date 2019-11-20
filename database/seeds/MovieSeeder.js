'use strict'

/*
|--------------------------------------------------------------------------
| MovieSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Movie = use('App/models/Movie')

class MovieSeeder {
  async run () {
    await Movie.create({
      user_id : null,
      title : "O lobo de wall street",
      director : "Martin Scorsese"
    });
    await Movie.create({
      user_id : null,
      title : "Scarface 1983",
      director : "Brian De Palma"
    });
    await Movie.create({
      user_id : null,
      title : "Gente grande",
      director : "Dennis Dugan"
    });
  }
}

module.exports = MovieSeeder
