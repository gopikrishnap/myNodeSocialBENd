
//after the body-persal installation (from server.js) write this bellow code
let mongoose=require('mongoose'); 
let objectId = mongoose.Schema.Types.ObjectId;

let UserDetails = new mongoose.Schema({
    name: String,
    email:  String,
    password:  String,
    mobile:  String,
    gender:  String,
    // // dob: Date,
    // isverified: { type: Boolean, default: false }
})
let UserModel=mongoose.model('users',UserDetails);


module.exports=UserModel;//2

///after above schema code ..1st we neeed to import (usercolletion )in  controller.js file 