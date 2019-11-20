'use strict'
const kue = require('kue');
const LeasedQueue = kue.createQueue();
const Movie = use('App/models/Movie');

LeasedQueue.process('LeaseMovie', async (data, done) => {
      await Movie.query()
                .where('id', data.data.movie_id)
                .update({
                  user_id : data.data.user_id,
                  leased : true
                });
    return done();
});

module.exports = LeasedQueue;