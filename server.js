let config =require('./config');//1 connect to config.ts

let mongoose=require('mongoose');//2 install mongoose

let routes=require('../myNodeSocialBENd/routes/routes') //from the routes.js file    //6***1 

let bodyParser = require('body-parser');//5  after this install ---> go to  rejister model.js file

let express=require('express')//6 this is use for server run

let app = express();//7

app.use(bodyParser.json({ limit: '50mb' }));

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));//6


mongoose.connect(config.db.uri).then(
    () =>{console.log("succesfully conneted to db");}

);//3 this code is connecting to config.ts file at db

app.use('/api',routes);//6****2 from file routes.js//////////////////////////////////

app.listen(config.port);//4


module.exports=app;//8 