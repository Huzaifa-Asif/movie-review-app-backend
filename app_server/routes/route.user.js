var express = require('express');
var router = express.Router();
var user = require('../controllers/controller.user.js');
var userModal=require('../models/model.user.js');


// Signup User
router.post('/signup', function (req, res) {
    var userForm = req.body;
    user.addUser(userForm, function (err, result) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Error in Connecting to DB",
                status: false
            });
        }
        
        return res.json({
            status: true,
            data: result
        });

    });

});



//Login for Users
router.post('/login', function (req, res) {
    let email = req.body.email;
    let password = req.body.password;
    record=new userModal();
    user.login(email, function (err, result) {
            if(err){
                return res.status(500).json({message:"Error in Connecting to DB",status:false});
            }
            else if(result)
            {
                console.log(result.password);
                if(record.comparePassword(password,result.password))
                {
                    var result1 = result.toObject();
                    result1.status = true;
                    return res.json(result1);
                }
                else
                return res.status(500).json({message:"Wrong Email",status:false});
            
            }
            else{
                return res.status(500).json({message:"Wrong Password",status:false});
            }
           
    });
});



// Update User
router.patch('/update/:id', function (req, res) {
    var userId = req.params.id;
    var userForm = req.body;
    user.updateUser(userId, userForm, {new: true}, function (err, result) {
        if (err) {
            return res.status(500).json({
                message: "Error in Connecting to DB",
                status: false
            });
        }
        return res.json({
            status: true, 
            message:"User updated successfully",
            data: result
        });

    });
});

module.exports = router;
