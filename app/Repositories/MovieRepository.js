'use strict'
const Movie = use('App/models/Movie');
const LeasedQueue = use('App/Job/Leased');
const kue = require('kue')
  , queue = kue.createQueue();

class MovieRepository {

  async list(response) 
  {
    try {
      let movieList =  await Movie.query().where('leased', false).paginate(1, 10);

      return response.status(200).json(movieList);
    } catch (e) {
      return response.status(400).json({});
    }
  }

  async leased(movie, response, user_id)
  {
    try {
      if(await this.checkLease(movie.movie_id) == true)
      {
        return response.status(400).json({"message" : "Movie already is leased"});
      }
      //SET MOVIE ON QUEUE
      await LeasedQueue.create('LeaseMovie', {
        "movie_id" : movie.movie_id, "user_id" : user_id
      }).save();

      let checkMovie = Movie.query()
                      .where('id', movie.movie_id)
                      .where('user_id', user_id)
                      .first();

      if(checkMovie)
        return response.status(200).json({"message" : "Leased with success."});

      return response.status(400).json({"message" : "Sorry, this Movie already is leased"});
    } catch (e) {
      return response.status(400).json({"message" : e.message});
    }
  }

  async checkLease(movie_id)
  {
    let check = await Movie.query().where('id', movie_id).first();

    return check.leased;
  }

  async return(movie, user_id, response)
  {
    try {
      await Movie.query()
                .where('id', movie.movie_id)
                .where('user_id', user_id)
                .update({
                  leased : false
                });

      return response.status(200).json({"message" : "Thank you."});
    } catch (e) {
      return response.status(400).json({"message" : "Error, Retry return movie."});
    }
  }
}

module.exports = new MovieRepository
