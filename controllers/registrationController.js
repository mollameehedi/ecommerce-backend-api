
const emailValidation = require('../helpers/emailValidation.js');
const User = require('../model/userSchema');
const bcrypt = require('bcrypt');

let registrationController = async (req, res) => {
    let { name, email, password } = req.body;

    let existingUser = await User.find({email:email})
    if(existingUser.length == 0){
    if (!name) {
        res.send('Name Is Required!!');
    }
    else if (!email) {
        res.send('Name Is Required!!');
    }
    else if (email && !emailValidation(email)) {
            res.send('Please Provide Valid Email!!');
    }
    else if (!password) {
        res.send('Name Is Required!!');
    }else{
        
            bcrypt.hash(password, 10, function(err, hash) {
                let user = new User({
                    name: name,
                    email: email,
                    password: hash
                    
                })
        
                user.save()
                res.send(user)
            });
      
    }
}else{
    res.send("Email Already Exits")
}
   
   
    
    // res.send('done');
}



module.exports = registrationController;