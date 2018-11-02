const  Router = require('express').Router();
const User = require('../schema/user')

Router.post('/user', async (req,res) => {
  try{
    const {username} = req.body;
    const newUser = new User({username})
    const savedUser = await newUser.save();
    res.status(200).send(savedUser)
  }
  catch(err){
    res.status(404).send({message:"was not able to save User"})
  }
})

Router.get('/users', async (req,res) => {
  try{
    const users = await User.find({})
    res.status(200).send(users)
  }
  catch(err){
    res.status(404).send({message:"was not able to fetch users"})
  }
})

module.exports =  Router;
