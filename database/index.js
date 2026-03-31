const mongoose = require("mongoose")
const connectionString = (process.env.MONGODB_URI)


async function connectToDatabase(){
   await  mongoose.connect(connectionString)
   console.log("connected to DB successfully")
}


module.exports = connectToDatabase