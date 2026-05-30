const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
    member: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    planName: String,

    price: {
        amount: Number,
        currency: String
    },

    duration: Number,

    features: [String],

    status: {
        type: String,
        enum: ['active', 'expired']
    },

    expiryDate: Date
});

module.exports = mongoose.model('Membership', membershipSchema);