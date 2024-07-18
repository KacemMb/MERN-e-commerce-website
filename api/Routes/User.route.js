import express from 'express'
import { signup, login, logout, UpdateUser } from '../Controllers/User.controller.js'

const UserRoute = express.Router()

 UserRoute.post('/signup',signup)
 UserRoute.post('/login', login)
 UserRoute.post('/logout',logout)
 UserRoute.post('/update',UpdateUser)

export default UserRoute