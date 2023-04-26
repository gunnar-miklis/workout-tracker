const express = require( 'express' );
const router = express.Router();
// const Workout = require( '../models/Workout.model' );
// const Exercise = require('../models/Exercise.model')
const isLoggedIn = require( '../utils/isLoggedIn' );
const User = require('../models/User.model');

router.post('/bmi', (req, res, next) => {
  const userId = req.session.sessionUser._id
  const {weight, height} = req.body

  User.findByIdAndUpdate(userId, {weight, height})
    .then(userFromDb => {
      res.redirect('/profile')
    })
})

router.get('/profile', isLoggedIn, (req, res, next) => {
  const userId = req.session.sessionUser._id
  User.findById(userId)
    .then(userFromDb => {
      let bmi = userFromDb.weight / Math.pow(userFromDb.height / 100, 2)
      bmi = Math.round(100*bmi)/100
      res.render('profile', {user: userFromDb, bmi})
    })
})


module.exports = router