const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    member: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    date: {
        type: Date,
        default: Date.now
    },

    checkIn: String,
    checkOut: String
});

module.exports = mongoose.model('Attendance', attendanceSchema);