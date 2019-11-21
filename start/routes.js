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
  Route.post('/auth', 'UserController.auth').validator('Auth')
  Route.post('/user/store', 'UserController.store').validator('StoreUser')
})
.prefix('api/v1')

/** AUTH */
Route.group(() => {
  Route.get('/user', 'UserController.get')
  Route.get('/logout', 'UserController.logout')

  Route.get('/movies', 'MovieController.list')
  Route.post('/movies/search', 'MovieController.search').validator('SearchMovie')
  Route.patch('/movies/leased', 'MovieController.leased').validator('LeaseMovie')
  Route.patch('/movies/return', 'MovieController.return').validator('ReturnMovie')
})
.middleware('auth')
.prefix('api/v1')

Route.any('*', ({ response }) => {
  return response.status(404).json({'message' : 'Page not found'});
});