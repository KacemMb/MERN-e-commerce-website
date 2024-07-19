import mongoose from 'mongoose'
const FeedbackSchema = new mongoose.Schema({

    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    
    },
    comment:{
        type: String,
        default: ''
    }},{timestamps: true}
)

const Feedback = mongoose.model('Feedback', FeedbackSchema)

export default Feedback