const express = require('express')
const router = express.Router()


router.post('/manski', (req, res)=>{
  const email = req.body.email
  const password = req.body.password

  console.log(email, password, 'the data was received at the backend')
  res.json({
    text: 'the message was received',
    idToken: 'this is the id token',
    localId: 'you now have the local id'
  })
})

module.exports = router