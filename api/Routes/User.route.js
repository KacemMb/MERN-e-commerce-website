import express from 'express'
import {  login, logout, UpdateUser, getAllUsers, signup } from '../Controllers/User.controller.js'

const UserRoute = express.Router()

 UserRoute.post('/signup',signup)
 UserRoute.post('/login', login)
 UserRoute.post('/logout',logout)
 UserRoute.post('/update',UpdateUser)
 UserRoute.get('/getall',getAllUsers)

export default UserRoute