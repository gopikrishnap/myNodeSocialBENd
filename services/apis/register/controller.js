let userCollection = require('./model');//from register model.js file  || next go to route.js file to create router   

let register = (req, res) => {
    console.log(req.body);
    userCollection.create(req.body)
         .then(
            (response) => {
                res.status(200).json({ status: true, message: "Succesfully registered", user: response });
            }
        ).catch(
            (error) => {
                res.status(500).json({ status: false, message: "Please try again" });
            }
        )
}

let getUserDetails=(req,res)=>{
    userCollection.findOne({ _id:req.params.id})
    .then(

        (response)=>{
           if(response == null){
            res.status(200).json({status:false,message:"user doesnot exit"});
           }
           else{
            res.status(200).json({status:true,message:"succesfully get user Details" , user: response});
           }
        }
    ).error(


        (error)=>{
            res.status(500).json({status:false,message:" Error please try again"});
        }
    )
}


let UpdateUserDetails=(req,res)=>{
    
    userCollection.findOneAndUpdate({ _id: req.body.id }, { $set: { mobile: req.body.mobile } }, { new: true })
    .then(
        (response) => {
            res.status(200).json({ status: true, message: "Succesfully updated User Details", user: response });
        }
    ).catch(
        (error) => {
            res.status(500).json({ status: false, message: "Error while updating Details , Please try again" });
        }
    )
}



module.exports = {
    register,
    getUserDetails,
    UpdateUserDetails

}//3