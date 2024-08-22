
const emailValidation = require('../helpers/emailValidation.js');
const User = require('../model/userSchema');
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const otpGenerator = require('otp-generator')

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
        let otp = otpGenerator.generate(10, { upperCaseAlphabets: false, specialChars: true });
            bcrypt.hash(password, 10, async function(err, hash) {
                let user = new User({
                    name: name,
                    email: email,
                    password: hash,
                    otp:otp 
                    
                })
        
                user.save()


               const transporter = nodemailer.createTransport({
                        service: "gmail",
                        auth: {
                          user: "mollameehedi@gmail.com",
                          pass: "rrsi dfya twdg dxib",
                        },
                      });

                      const info = await transporter.sendMail({
                        from: process.env.BASE_EMAIL, 
                        to: email, 
                        subject: "Verify your Email", 
                        html: `<div style="display: flex;width: 600px;height: 200px;"> <div style="width: 50%;height: 100px;">Please Verify your email by click on this button <a href="https://www.figma.com/">Verify</a>${otp}</div></div>`,
                      });

                res.send(user)
            });
      
    }
}else{
    res.send("Email Already Exits")
}
   
   
    
    // res.send('done');
}



module.exports = registrationController;