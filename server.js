const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/membership', require('./routes/membershipRoutes'));
app.use('/api/workout', require('./routes/workoutRoutes'));
app.use('/api/attendance', require('./routes/attendanceRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

app.listen(5000, () => {
    console.log("Server running on port 5000");
});