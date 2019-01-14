const express = require('express')
const router = express.Router()
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../../config/keys')
const passport = require('passport')

// load input validation
const validateRegisterInput = require('../../validation/register')
const validateLoginInput = require('../../validation/login')

// load user model
const User = require('../../models/User')



router.get('/test', (req, res)=>{
  res.json({
    mes: 'users route is working'
  })
})


// @route   GET api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res)=>{

  const { errors, isValid } = validateRegisterInput(req.body)
  
  console.log('isvalid: ', isValid)
  if(!isValid) {
    return res.status(400).json(errors)
  }




  User.findOne({email: req.body.email})
    .then(user => {
      if(user){
         errors.email = 'Email already exists';
        return res.status(400).json({errors})
      } else {
      // use gravatar to grab the image
      const avatar = gravatar.url(req.body.email, {
        s: '200', // size of the email
        r: 'pg', // rating
        d: 'mm' // default 
      });

        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar,
          password: req.body.password
        });

      bcrypt.genSalt(10, (err, salt) => {
        // salt is the returned value
          // console.log(`this is the salt: ${salt}`)
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          // hash is the new hashedPassword
            // console.log(`this is the hashed password: ${hash}`)
          if(err) throw err;
          newUser.password = hash;
          newUser
            .save()
              .then(user => { 
                res.json(user)
              })
                .catch(err => console.log(err))
        })
      }) 
    }
  })
})


// @route   GET api/users/login
// @desc    Login User / return a token
// @access  public
router.post('/login', (req, res)=>{
  const email = req.body.email
  const password = req.body.password
  

   const {errors, isValid} = validateLoginInput(req.body)
   console.log('isvalid: ', isValid)
   
   if (!isValid) {  return res.status(400).json(errors)  }


  // Find user by email
  User.findOne({email: email})
    .then(user => {
      // check for user
      if(!user){
        return res.status(404).json({email: 'User not found'})
      }

      // check password
      bcrypt.compare(password, user.password)
        .then(isMatch =>{
          if(isMatch){
            // res.json({msg: 'Success'})
             // create jwt payload
            const payload  = { id: user.id, name: user.name, avatar: user.avatar}

          // Signed Token
            jwt.sign(
              payload, 
              keys.secretOrKey, 
              { expiresIn: 3600 }, 
                (err, token) => {
                  res.json({
                    success: true,
                    token: `Bearer ${token}`

                  })
            });
          } else {
            errors.password = 'password incorrect'
            return res.status(400).json({errors})
          }
        })
    })
})


// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get('/current', passport.authenticate('jwt', { session: false }), 
  (req, res, next) => {
    res.json({sucess: 'we are in the current route', user: req.user})
})


module.exports = router

