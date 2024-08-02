import express from 'express'
import { deleteFeedback, getAllFeedbacks } from '../Controllers/Feedback.controller'

const feedRoute = express.Router()

feedRoute.get('/getallfeed',getAllFeedbacks)
feedRoute.delete('deleteFeed',deleteFeedback)

export default feedRoute