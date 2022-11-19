require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose') 
const cors = require('cors')
const fileupload = require ('express-fileupload')
const cookieParser = require('cookie-parser')


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileupload({
    useTempFiles: true
}))

//routes
app.use('/user',require('./routes/userRouter'))
app.use('/api',require('./routes/categoryRouter'))
app.use('/api',require('./routes/upload'))



//connect to mongoDB
const URI = process.env.MONGODB_URL
mongoose.connect(URI)
.then(()=>{
    console.log("connected to mongoDB")
}).catch((err)=>{
    console.log("connection not setup")
    console.log(err)
})

// app.get('/',(req,res)=>{
//     res.json({message:"welcome to my website"})
// })

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log('Server is running on port',PORT)
})