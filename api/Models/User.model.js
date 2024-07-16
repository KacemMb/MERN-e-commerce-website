import mongoose from 'mongoose'
const UserSchema = new mongoose.Schema({
full_name :{
    type: String,
    required: true,
    unique: true,
},

email:{
    type: String,
    required: true,
    unique: true,
},
password:{
    type: String,
    required: true
},
role:{
    type: String,
    default: 'user'
},
profile_pic:{
    type: String,
    default: 'default.jpg',
}
},{timestamps: true}
)


const User = mongoose.model('User', UserSchema)

export default User