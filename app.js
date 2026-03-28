const  express= require('express')
const app= express()

app.get("/",(req,res)=>{
    // console.log(req)
    // res.send("hello World")
    // res.send("Test World")
    res.json({
        message : "this is homepage"
    })
})

app.get("/about",(req,res)=>{
    res.json({
        message : "This is about page"
    })
})

app.listen(3000,()=>{
    console.log("NodeJs Project has started")
}
)