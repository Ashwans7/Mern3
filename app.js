require('dotenv').config()
const  express= require('express')
const connectToDatabase = require('./database/index.js')
const app= express()

connectToDatabase()

// const mongoose = require('mongoose')
//first approach
// mongoose.connect('mongodb+srv://ashwanshrestha0_db_user:<password>@cluster0.05rxcik.mongodb.net/?appName=Cluster04qltOmMREZPKIPXn')
// .then(()=>{
//     console.log("connected successfully")
// })
// .catch()

//2nd approad (modular programming)(databse folder)


app.get("/",(req,res)=>{
    // console.log(req)
    // res.send("hello World")
    // res.send("Test World")
    res.status(200).json({
        message : "this is homepage"
    })
})

app.get("/about",(req,res)=>{
    res.json({
        message : "This is about page"
    })
})

app.listen(process.env.PORT,()=>{
    console.log("NodeJs Project has started")
}
)
 
// mongodb+srv://ashwanshrestha0_db_user:4qltOmMREZPKIPXn@cluster0.05rxcik.mongodb.net/?appName=Cluster04qltOmMREZPKIPXn