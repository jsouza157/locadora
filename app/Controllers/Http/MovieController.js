'use strict'
const MovieRepository = use('App/Repositories/MovieRepository');

class MovieController {

	async listMovies({ response }) 
	{
		return await MovieRepository.list(response);
	}

	async leasedMovie({ request, response, auth })
	{
		return await MovieRepository.leased(request.only(["movie_id"]), response, auth.user.id)
	}

	async returnMovie({ request, auth, response })
	{
		return await MovieRepository.return(request.only(["movie_id"]), auth.user.id, response);
	}

}

module.exports = MovieController
