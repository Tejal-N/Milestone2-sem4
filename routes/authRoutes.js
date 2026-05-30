const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async(req,res)=>{

    const hashedPassword = await bcrypt.hash(req.body.password,10);

    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:hashedPassword,
        role:req.body.role
    });

    await user.save();

    res.json({
        message:"User Registered"
    });
});

router.post('/login', async(req,res)=>{

    const user = await User.findOne({
        email:req.body.email
    });

    if(!user){
        return res.json({
            message:"User not found"
        });
    }

    const validPass = await bcrypt.compare(
        req.body.password,
        user.password
    );

    if(!validPass){
        return res.json({
            message:"Wrong password"
        });
    }

    const token = jwt.sign(
        {
            id:user._id,
            role:user.role
        },
        process.env.JWT_SECRET
    );

    res.json({
        token
    });
});

module.exports = router;