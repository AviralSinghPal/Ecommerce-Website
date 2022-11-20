const mongoose =require("mongoose");
const validator = require("validator")

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true," Name is required"],
         
    },
    email:{
        type: String,
        required: [true," Email is required"],
        validate: [validator.isEmail,"Email should be of coorect format"],
        unique: true
    },
    password:{
        type: String,
        required: [true," Password is required"],
        // validate: [validator.isEmail,"Email should be of coorect format"],
        minlength: [6, "password should be of atleast 6 char"],
        select: false
    },

    
    role:{
        type: String,
        default: 'user'
    },
    photo:{
        id:{
            type:String,
            reuired: true
        },

        secure_url: {
            type: String,
            required: true,
    
        },
    },

    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    CreatedAt:{
        type: Date,
        default: Date.now()
    }
    
})



module.exports = mongoose.model('User', userSchema)