const mongoose = require('mongoose')

const url = 'mongodb+srv://user:user123@test.mhw86.mongodb.net/Test?retryWrites=true&w=majority'

mongoose.connect(url).then(()=>{
    console.log('mongodb connected')
}).catch((e)=>{
    console.log(e)
})