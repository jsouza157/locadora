'use strict'
const UserRepository = use('App/Repositories/UserRepository');

class UserController {

	async auth({ request, auth, response })
	{
		return await UserRepository.auth(request.only(["email", "password"]), auth, response);
	}

	async store({request, response})
	{
		return await UserRepository.store(request.only(["name", "email", "password"]), response);
	}

	async get({ auth })
	{
		return await auth.getUser();
	}
	
	async logout({ auth, response })
	{
		return await UserRepository.logout(auth, response);
	}
}

module.exports = UserController
