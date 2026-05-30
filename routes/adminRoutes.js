const router = require('express').Router();
const User = require('../models/User');
const auth = require('../middleware/authMiddleware');

router.get('/users', auth, async(req,res)=>{

    const users = await User.find();

    res.json(users);
});

router.put('/block/:id', auth, async(req,res)=>{

    await User.findByIdAndUpdate(req.params.id,{
        blocked:true
    });

    res.json({
        message:"User Blocked"
    });
});

module.exports = router;