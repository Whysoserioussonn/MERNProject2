require('dotenv').config()
const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const path = require('path')
const errorHandler = require('./middleware/errorHandler')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const { logger, logEvents } = require('./middleware/logger')
const connectDB = require('./config/dbConn')
const mongoose = require('mongoose')


const PORT = process.env.PORT || 5000

console.log(process.env.NODE_ENV)

connectDB()

app.use(logger)

app.use(cors(corsOptions))

app.use(express.json())

app.use(cookieParser())  // third party middleware

app.use('/', express.static(path.join(__dirname, 'public')))   //telling express where to find static files like images using __dirname means look inside the folder that we are in which is /public folder

app.use('/', require('./routes/root'))
app.use('/users', require('./routes/userRoutes'))
app.use('/notes', require('./routes/noteRoutes'))

app.all('*', (req, res) => {
  res.status(404)
  if (req.accepts('html')) {
      res.sendFile(path.join(__dirname, 'views', '404.html'))
  } else if (req.accepts('json')) {
      res.json({ message: '404 Not Found' })
  } else {
      res.type('txt').send('404 Not Found')
  }
})

app.use(errorHandler)

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
app.listen(PORT,  () => console.log(`Server running on port ${PORT}`))
})

mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})
