//   register controler.js file(from) ---> write below code


let express=require('express');//1
let userController=require('./controller');//5

let router= express.Router();//3

router.post('/userRegistrstion',userController.register );//4

router.get('/getUserdetails/:id',userController.getUserDetails);
router.put('/updateUserdetails',userController.UpdateUserDetails );
module.exports=router;


//after the above code go to main routes.js file