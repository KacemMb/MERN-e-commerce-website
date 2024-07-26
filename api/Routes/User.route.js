import express from 'express'
<<<<<<< HEAD
import {login, logout, UpdateUser, createUser } from '../Controllers/User.controller.js'
=======
import {  login, logout, UpdateUser, getAllUsers, signup } from '../Controllers/User.controller.js'
>>>>>>> 4da60b23a9884a33999ee10bc0de1f1b938733b6

const UserRoute = express.Router()

 UserRoute.post('/signup',createUser)
 UserRoute.post('/login', login)
 UserRoute.post('/logout',logout)
 UserRoute.post('/update',UpdateUser)
 UserRoute.get('/getall',getAllUsers)

export default UserRoute