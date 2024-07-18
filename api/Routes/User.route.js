import express from 'express'
import { signup ,login, logout, UpdateUser} from '../controller/User.controller.js'

const UserRoute = express.Router()

 router.post('/signup',signup)
 router.post('/login', login)
 router.post('/logout',logout)
 router.post('/update',UpdateUser)

export default UserRoute