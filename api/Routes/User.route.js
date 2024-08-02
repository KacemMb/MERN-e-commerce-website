import express from 'express'
import {  login, logout, UpdateUser, getAllUsers, createUser, deleteUser} from '../Controllers/User.controller.js'

const UserRoute = express.Router()

 UserRoute.post('/signup',createUser)
 UserRoute.post('/login', login)
 UserRoute.post('/logout',logout)
 UserRoute.post('/update',UpdateUser)
 UserRoute.get('/getall',getAllUsers)
 UserRoute.delete('/delete/:id',deleteUser)

export default UserRoute