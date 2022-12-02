const User =require('../models/userModel')
const mongoose=require('mongoose');

// Get all User
const getAllUsers=async (req,res)=>{
    const users=await User.find({});

    res.status(200).json(users);
}

// Get a single User
const getOneUser= async (req,res)=>{
    const{id}=req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({err:"No such User"})
    }

    const user= await User.findById(id);
    
    if(!user){
        return res.status(404).json({err:"No such User"})
    }

    res.status(200).json(user)
}

// Create a new User
const createUser = async (req,res)=>{
    const{name}=req.body;

    // add to db
    try {
        const user=await User.create({name});
        res.status(200).json(user);
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
}

module.exports={getAllUsers,getOneUser,createUser}