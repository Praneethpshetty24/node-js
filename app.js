const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 3000;
const mongoURI = "mongodb://127.0.0.1:27017/aws_backend";
const userRoutes = require('./routes/userRoutes');

mongoose.connect(mongoURI).then(()=>{
    console.log("Connected to MongoDB")
}).catch((err)=>{
    console.log("Error connecting to MongoDB",err)
})


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api',userRoutes);

app.get('/health',(req,res)=>{
    res.send({status:true,message:"Server is running"})
})

app.get('/',(req,res)=>{
    res.send({status:true,message:"Server is running"})
})

app.listen(port,()=>{
    console.log("Server is running on port",port)
})