require('dotenv').config()
const express = require('express');
const mongoose= require('mongoose');
const cors = require('cors');
const userRoute=require('./routes/userRoute')
const msgRoute=require('./routes/msgRoute')
// express app
const app= express()

// middleware 
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

// set cors
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            
    // accessControlAllowCredentials:true,
    optionSuccessStatus:200
}
app.use(cors());

// routes
app.use('/api/users',userRoute)
app.use('/api/messages', msgRoute)

// connect to Mongo_DB

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("SERVER CONNECTED TO DB!");
    // Listen the port
    app.listen(process.env.PORT,()=>{
        console.log("listening port",process.env.PORT)
    })
})
.catch((error)=>{console.log(error)})

