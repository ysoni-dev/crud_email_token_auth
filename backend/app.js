const express = require('express')
const db = require('./server/db.js')
require('dotenv').config()
const MyTest = require('./models/model.js')
const app = express()
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const PORT =  process.env.PORT || 5000 
const path = require('path')

const cors = require('cors')
app.use(cors())
app.use(express.json())


// app.use(express.static(path.resolve(__dirname, "./client/build")));

// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
//   });




app.post('/add',async(req,res)=>{
    try {
        const {name,number,email} = req.body
            const userExist = await MyTest.findOne({email:email})
            if(userExist){
                return res.status(400).json({error: 'email already exist'})
            }


            const token = jwt.sign({name,number,email}, process.env.JWT_ACC_ACTIVATE,{expiresIn:'20m'})


                let transporter = nodemailer.createTransport({
                    service: "Gmail",
                    auth: {
                      user: "thundervilla9@gmail.com",
                      pass: "cartercarter"
                    }
                  });

                  let sender = "yogesh";
                  const data = await transporter.sendMail({
                      
                      from : sender,
                      to: email,
                      subject: "Enrollment Link",
                      text:"hey there, happy new year",
                      html:`<h2>please click on this link to enroll your account</h2>
                      <a href="${process.env.CLIENT_URL}/activate/${token}">${token}</a> 
                      `
                  })

                 console.log('email sent kindly activate your account ', data.messageId)

                 console.log('preview url ', nodemailer.getTestMessageUrl(data))
            
        
    } catch (error) {
       console.log(error) 
    }
})




// checking link is activated then add user

app.get('/activate/:token',async(req,res)=>{
    const {token} = req.params
    if(token){
        jwt.verify(token, process.env.JWT_ACC_ACTIVATE, function(err,decodedToken){
            if(err){
                return res.status(404).json({message:'link is expired or invalid'})
            }
            
        const {name,number,email} = decodedToken
        MyTest.findOne({email}).exec((err,user)=>{
            if(user){
                return res.status(400).json({message:'user exists'})
            }
            const newUser =  MyTest({name,number,email})
            newUser.save()
            
            res.json({message: 'you are enrolled'})
            console.log('enrolled successfully')

            
            
        })
        
       
    })
    }
})





app.get('/cources',(req,res)=>{
    res.send('my cources')
})




// show all users
app.get('/show',async(req,res)=>{
    try {
        const data = await MyTest.find()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})

