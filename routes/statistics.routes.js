const express = require( 'express' );
const router = express.Router();
const Exercise = require('../models/Exercise.model')
const isLoggedIn = require( '../utils/isLoggedIn' );
const User = require('../models/User.model');
const session = require('express-session');

router.get('/statistics', isLoggedIn, (req, res, next) => {

  const userId = req.session.sessionUser._id

  // User.findById(userId)
  //   .then(userFromDb => {
  //     res.render('statistics', {exercises: userFromDb.exercises})
  //   })
})

module.exports = router