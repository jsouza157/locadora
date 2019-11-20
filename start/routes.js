'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/** NOT AUTH */
Route.group(() => {
  Route.post('/auth', 'UserController.auth')
  Route.post('/user/store', 'UserController.store')
})
.prefix('api/v1')

/** AUTH */
Route.group(() => {
  Route.get('/user', 'UserController.get')
  Route.get('/logout', 'UserController.logout')

  Route.get('/movies', 'MovieController.listMovies')
  Route.patch('/movies/leased', 'MovieController.leasedMovie')
  Route.patch('/movies/return', 'MovieController.returnMovie')
})
.middleware('auth')
.prefix('api/v1')

Route.any('*', ({ response }) => {
  return response.status(404).json({'message' : 'Not found'});
});