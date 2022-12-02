const  mongoose=require("mongoose");

const msgSchema= mongoose.Schema({
    sender_id:{
        type:String,
        require: true
    },
    receiver_id:{
        type:String,
        require: true
    }, 
    title:{
        type:String,
        require: true
    },
    body:{
        type:String,
        require: true
    }
},{timestamps:true});

module.exports=mongoose.model("Message",msgSchema)