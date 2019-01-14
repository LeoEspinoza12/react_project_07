const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')

const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')
const register = require('./routes/register')


const app = express()

// body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

//DB config
const db = require('./config/keys').mongoURI 

// Connect to MongoDB
mongoose
  .connect(db, {useNewUrlParser: true})
  .then(()=>console.log('MongoDB is connected'))
  .catch((err)=> console.log(err))


// passport middleware
app.use(passport.initialize())

// passport config
require('./config/passport')(passport)



// use routes
app.use('/api/users', users)
app.use('/api/profiles', profile)
app.use('/api/posts', posts)
app.use('/manski', register)

const port =  process.env.port || 5000

app.listen(port, () => {
  console.log(`we are connected to port ${5000}`)
})