const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/register',async(req,res)=>{
    try{
        const {name,email} = req.body;
        const user = await User.create({name,email});
        res.status(201).json({message:"User registered successfully",user});
    }catch(error){
        res.status(500).json({message:"Error registering user",error:error.message})
    }
})

router.get('/users',async(req,res)=>{
    try{
        const users = await User.find();
        res.status(200).json({message:"Users fetched successfully",users});
    }catch(error){
        res.status(500).json({message:"Error fetching users",error:error.message})
    }
})

module.exports = router;