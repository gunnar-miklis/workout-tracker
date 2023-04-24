const express = require( 'express' );
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User.model');

// Signup
router.get('/signup', (req, res, next) => {
  res.render('auth/signup')
})

router.post('/signup', (req, res, next) => {
  const {username, email, password} = req.body
  console.log(`Username: ${username} Password: ${password}`)

  User.findOne({username})
    .then(userFromDb => {
      if(userFromDb !== null){
        res.render('auth/signup', { message: 'Username is already taken!'})
      }
      else{

        User.findOne({email})
          .then(emailUserFromDb => {
            if(emailUserFromDb !== null){
              res.render('auth/signup', { message: 'Email is already taken!'})
            }
            else{
              const salt = bcrypt.genSaltSync()
              const hash = bcrypt.hashSync(password, salt)
      
              User.create({username: username, email: email, password: hash})
                .then(() => {
                  res.redirect('/')
                })
                .catch(err => next(err))
            }
          })
      }
    })
})

// Login
router.get( '/login', ( req, res, next ) => {
	res.render( 'auth/login' );
} );

router.post( '/login', ( req, res, next ) => {
	const { username, email, password } = req.body;
	console.log( `Username: ${username}, Email: ${email}, Password: ${password}` );
} );

module.exports = router;
