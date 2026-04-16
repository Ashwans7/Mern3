require('dotenv').config()
const  express= require('express')
const connectToDatabase = require('./database/index.js')
const Blog = require('./model/blogModel.js')
const app= express()
app.use(express.json())

//multerConfig
const{multer,storage} = require('./middleware/multerConfig.js')
const upload = multer({storage: storage})



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
    // console.log(req.body)
    // res.send("hello World")
    // res.send("Test World")
    res.status(200).json({
        message : "this is homepage"
    })
})
//uploading image
app.post("/blog",upload.single('image'),(req,res)=>{
    console.log(req.body)
// app.post("/blog",upload.single('image'),async(req,res)=>{
//    //console.log(req.body) //data from frontend
//    //console.log(req.body.description)
// //    const description = req.body.description
// //    const title = req.body.title
// //    const subtitle = req.body.subtitle
// //    const image = req.body.image
//     const {title,description,subtitle,image} = req.body
//     //checking if user has entered the data or not
// if(!title || !description || !image || !subtitle){
//     return res.status(400).json({
//         message : "Please provide title,description,subtitle,image"
//     })
// }
//     console.log(req.body)
//     //inserting data
//     await Blog.create({
//         title : title,
//         description : description,
//          subtitle : subtitle,
//          image : image

//     })
                          
    
    res.status(200).json({
        message : " Blog API hit success"
    })

})



// app.get("/about",(req,res)=>{
//     res.json({
//         message : "This is about page"
//     })
// })


app.listen(process.env.PORT,()=>{
    console.log("NodeJs Project has started")
}
)
 
// mongodb+srv://ashwanshrestha0_db_user:4qltOmMREZPKIPXn@cluster0.05rxcik.mongodb.net/?appName=Cluster04qltOmMREZPKIPXn