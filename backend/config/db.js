const mongoose = require('mongoose')

const db = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: 'MERN-CHAT-APP',
    })
    .then(() => {
      console.log('Connected to database!')
    })
    .catch((err) => {
      console.log(`Some error occured while connecting to database: ${err}`)
    })
}
module.exports = db
