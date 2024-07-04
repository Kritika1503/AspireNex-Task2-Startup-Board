const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv')
const userRoutes = require('./routes/userRoutes')
const chatRoutes = require('./routes/chatRoutes')
const messageRoutes = require('./routes/messageRoutes')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const path = require('path')
// const cloudinary = require('cloudinary')

// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
//   api_key: process.env.CLOUDINARY_CLIENT_API,
//   api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
// })

dotenv.config()
connectDB()
const app = express()

app.use(express.json()) // to accept json data

// app.get("/", (req, res) => {
//   res.send("API Running!");
// });

app.use('/api/user', userRoutes)
app.use('/api/chat', chatRoutes)
app.use('/api/message', messageRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

const server = app.listen(5000, console.log('server started'))

const io = require('socket.io')(server, {
  pingTimeout: 60000,
  cors: {
    origin: 'http://localhost:3000',
  },
})

io.on('connection', (socket) => {
  console.log('Connected to socket.io')
  socket.on('setup', (userData) => {
    socket.join(userData._id)
    socket.emit('connected')
  })

  socket.on('join chat', (room) => {
    socket.join(room)
    console.log('User Joined Room: ' + room)
  })
  socket.on('typing', (room) => socket.in(room).emit('typing'))
  socket.on('stop typing', (room) => socket.in(room).emit('stop typing'))

  socket.on('new message', (newMessageRecieved) => {
    var chat = newMessageRecieved.chat

    if (!chat.users) return console.log('chat.users not defined')

    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return

      socket.in(user._id).emit('message recieved', newMessageRecieved)
    })
  })

  socket.off('setup', () => {
    console.log('USER DISCONNECTED')
    socket.leave(userData._id)
  })
})
