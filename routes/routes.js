
//after route.js file write this below code

let express = require('express');//1   
               
let router=express.Router();//2

let userRouter=require('../services/apis/register/route');//3 after this import this route in the server.js file

router.use('/user',userRouter);//4




module.exports= router;//5

// after this code  import in server.js file(6th point in server.js file)