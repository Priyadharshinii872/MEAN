const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        Name:{
            type:String
        },
        Position:{
            type:String
        },
        Level:{
            type:String
        },
        Action:{
            type:String
        }
    }
)

module.exports = mongoose.model('users',UserSchema , 'users')