const express=require('express')
const route=express.Router();
const controller=require('../Controller/controller')

route.post('/Signup', controller.create)
route.post('/SignIn',controller.signIn)
route.get('/Signup/Users',controller.find)
module.exports=route