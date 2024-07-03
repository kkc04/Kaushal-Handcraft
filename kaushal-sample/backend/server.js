const express = require('express');
const authRoutes = require('./routes/auth');
const bodyParser = require('body-parser');
const dotenv=require('dotenv');
const mongoose = require('mongoose');
const connectDB = require('./config/db.js');
const User = require('./models/User.js');
const path = require('path');
const cors = require('cors');
const app = express();

dotenv.config();
connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.post('/signup', (req, res) => {
  const newUser = new User({
    username: req.body['username'],
    email: req.body['email'],
    password: req.body['password'],
  });

  newUser.save()
    .then((result) => {
      res.redirect('/');  // Redirect to the homepage after signup
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Error signing up');
    });
});

app.use('/api/auth', authRoutes);


