const express= require('express');
const {getAllMsg,getMsg,createMsg}=require('../controllers/msgController')
const router=express.Router();

// Get all Users
router.get('/',getAllMsg)

// Get a single User
router.get('/:id',getMsg)

// Post a User
router.post('/',createMsg)

module.exports=router;