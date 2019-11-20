'use strict'
const User = use('App/models/User');

class UserRepository {

  	async auth( data, auth, response )
  	{
		try {
			if(await auth.attempt(data.email, data.password))
			{
				let user = await User.findBy('email', data.email)
            	let token = await auth.generate(user)
				await Object.assign(user, token)

				response.status(200).json(user);
			}
		} catch (e) {
			response.status(401).json({"message" : "E-mail or password is invalid."})
		}
	}

	async logout(auth, response)
	{
		try {
			await auth
  				.authenticator('api')
  				.revokeTokensForUser( await auth.getUser() )

        	return response.status(200).json({ message: "You are logout" });
		} catch (e) {
			return response.status(500).json({ message: "Error in logout" });
		}
	}

	async store(data, response)
	{
		try {
			await User.create({
				name: data.name,
				email : data.email,
				password : data.password
			})

			return response.status(201).json({ message: "User created." });
		} catch (e) {
			return response.status(400).json({ message: "Error to create user, e-mail already registred." });
		}
	}
}

module.exports = new UserRepository
