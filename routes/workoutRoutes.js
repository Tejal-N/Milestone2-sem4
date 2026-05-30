const router = require('express').Router();
const Workout = require('../models/Workout');
const auth = require('../middleware/authMiddleware');

router.post('/create', auth, async(req,res)=>{

    const workout = new Workout({
        trainer:req.user.id,
        member:req.body.member,

        exercises:req.body.exercises,

        schedule:{
            day:req.body.day,
            time:req.body.time
        },

        difficultyLevel:req.body.level
    });

    await workout.save();

    res.json({
        message:"Workout Created"
    });
});

module.exports = router;