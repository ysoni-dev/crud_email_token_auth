const mongoose = require('mongoose')

const Mytest  = mongoose.Schema({
    name:{
        type:String
    },
    number:{
        type:Number
    },
    email:{
        type:String
    }
})

const MyTest  = new mongoose.model('MyTest', Mytest)
module.exports = MyTest