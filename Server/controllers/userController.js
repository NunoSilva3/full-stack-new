const User   = require('../models/User'),
      config = require('../config.js'),
      jwt    = require('jsonwebtoken');

class UserController {
    find(req,res){
        User.find({},(err, users)=> !err ? res.status(200).send(users) : {err});
    }
    async findOne(req,res){
        let { _id} = req.user

        try {
            const user = await User.findOne({_id})
            res.send(user)
        } catch (error) {
            console.log(error)
        }
       

       
    }
    register(req, res, next) {
        console.log('REGISTER BODDDDYYYYYYYY',req.body)
        const {username, password, email} = req.body
        if(!username || !password|| !email) return res.status(422).send({error: 'username, email and password are mandatory!' });
        User.findOne({username:username},(err, existingUser)=>{
            if(err) return console.log(err)
            if(err) return next(err)
            if(existingUser) {
                return res.status(422).send({error: 'username already exists !!' })
            }
            const user = new User({
                username:username,
                password:password,
                email:email,
            })
                console.log(user)
            user.save(function(err){
                if(err) return console.log(err)
                if(err) return next(err)
                var token = jwt.sign(user.toJSON(), config.secret,{
                    expiresIn:100080
                })
                res.status(200).send({
                    success:true,
                    token: token
                })
            })
        })
    }
    login(req ,res , next){
        const { username, password } =  req.body
        if(!username || !password) {
            return res.status(422).send({error: 'username and password are mandatory!' })
        }
        User.findOne({username},(err, user) => {
            if(err) return console.log(err)
            if(err) return next(err)
            if(!user) {
                console.log(err)
                return res.status(422).send({error: 'no one by that username here' })
            }
            user.comparePassword(password,(err, match)=>{
                if(match && !err){
                var token = jwt.sign(user.toJSON(), config.secret,{ expiresIn:100080 })
                    return res.json({ success:true, token: token, username:username })
                }else{
                    return res.json({success:false, err})
                }
            })
        })
    }
    async update (req,res){
        console.log('USERRRRRRRRRRRR',req.user)
        const { username , email, nickName, profilePhoto , moto} = req.body;
        const user = req.user
        try{
            const update = await User.updateOne({_id : user._id },
                        {
                        $set:{
                            username:username,
                            password:user.password,
                            email:email,
                            nickName:nickName,
                            profilePhoto:profilePhoto,
                            moto:moto
                            }
                        }      
            )  
            console.log('UPDATE SUCCESS',update)
            if (update.ok > 0) res.send(req.body)
            }
        
        
         catch(error){
             console.log('E R R O R UPDATE',error)
             res.send({error})
         } 

    }


}
module.exports = new UserController();