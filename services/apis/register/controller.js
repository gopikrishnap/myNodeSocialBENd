let userCollection = require('./model');//from register model.js file  || next go to route.js file to create router   

let register = (req, res) => {
    console.log(req.body);
    userCollection.create(req.body)
         .then(
            (response) => {
                res.status(200).json({ status: true, message: "Succesfully registered" });
            }
        ).catch(
            (error) => {
                res.status(500).json({ status: false, message: "Please try again" });
            }
        )
}

module.exports = {
    register

}//3