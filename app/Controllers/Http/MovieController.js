'use strict'
const MovieRepository = use('App/Repositories/MovieRepository');

class MovieController {

	async list({ response })
	{
		return await MovieRepository.list(response);
	}

	async search({ request, response })
	{
		return await MovieRepository.search(request.only(["title"]), response);
	}

	async leased({ request, response, auth })
	{
		return await MovieRepository.leased(request.only(["movie_id"]), response, auth.user.id)
	}

	async return({ request, auth, response })
	{
		return await MovieRepository.return(request.only(["movie_id"]), auth.user.id, response);
	}

}

module.exports = MovieController
