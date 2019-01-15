const express = require('express')
const router = express.Router()
const axios = require('axios')

router.post('/manski', (req, res)=>{
  const data = {
    email: req.body.email,
    password: req.body.password
  }
  console.log(data)
    const url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key='

  axios.post(url, data)
    .then(response => {
      if (response.status === 200){
        res.json(response.data)
      } 
    })
    .catch(error=>{
      return error.data
    })
})

module.exports = router