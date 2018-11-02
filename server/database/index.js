const  mongoose = require('mongoose');
const {MONGOOSE_PORT} = require('../key');

(async() => {
  try{
    await mongoose.connect(MONGOOSE_PORT, {useNewUrlParser:true})
  }
  catch(err){
    console.log(err)
  }
})()
