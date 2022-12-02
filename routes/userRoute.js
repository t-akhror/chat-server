const express= require('express');
const {getAllUsers,getOneUser,createUser}=require('../controllers/userController')
const router=express.Router();

// Get all Users
router.get('/',getAllUsers)

// Get a single User
router.get('/:id',getOneUser)

// Post a User
router.post('/',createUser)

module.exports=router;