const Message=require('../models/msgModel');
const mongoose=require('mongoose');

//get all messages
const getAllMsg= async (req,res)=>{
    const messages=await Message.find({})

    res.status(200).json(messages)
}

// get a single message
const getMsg= async (req,res)=>{
    const  {id}=req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({err:"no such Message"})
    }
    const message=await Message.findById(id);

    if(!message){
        return res.status(404).json({err:"No such Message"})
    }

    res.status(200).json(message)
}

// create new message
const createMsg= async (req,res)=>{
    const {
        sender_id,
        receiver_id,
        title,
        body,
    }=req.body;

    // add to database
    try {
        const message = await Message.create({
            sender_id,
            receiver_id,
            title,
            body,
        })
        res.status(200).json(message)
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
}

module.exports={getAllMsg,getMsg,createMsg}
