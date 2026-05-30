const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    trainer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    member: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    exercises: [String],

    schedule: {
        day: String,
        time: String
    },

    difficultyLevel: {
        type: String,
        enum: ['beginner', 'intermediate', 'advanced']
    }
});

module.exports = mongoose.model('Workout', workoutSchema);