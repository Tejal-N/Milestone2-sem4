const router = require('express').Router();
const Membership = require('../models/Membership');
const auth = require('../middleware/authMiddleware');

router.post('/subscribe', auth, async(req,res)=>{

    const membership = new Membership({
        member:req.user.id,
        planName:req.body.planName,

        price:{
            amount:req.body.amount,
            currency:"INR"
        },

        duration:req.body.duration,

        features:req.body.features,

        status:"active",

        expiryDate:req.body.expiryDate
    });

    await membership.save();

    res.json({
        message:"Membership Added"
    });
});

router.get('/status', auth, async(req,res)=>{

    const membership = await Membership.findOne({
        member:req.user.id
    });

    res.json(membership);
});

module.exports = router;