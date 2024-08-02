import express from 'express'
import { deleteFeedback, getAllFeedbacks } from '../controllers/Feedback.controller.js'

const feedRoute = express.Router()

feedRoute.get('/getallfeed',getAllFeedbacks)
feedRoute.delete('deleteFeed',deleteFeedback)

export default feedRoute