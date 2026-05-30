const router = require('express').Router();
const Attendance = require('../models/Attendance');
const auth = require('../middleware/authMiddleware');

router.post('/checkin', auth, async(req,res)=>{

    const attendance = new Attendance({
        member:req.user.id,
        checkIn:req.body.checkIn
    });

    await attendance.save();

    res.json({
        message:"Attendance Marked"
    });
});

router.get('/history', auth, async(req,res)=>{

    const history = await Attendance.find({
        member:req.user.id
    });

    res.json(history);
});

module.exports = router;