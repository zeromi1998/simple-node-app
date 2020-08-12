const express=require("express")

const mongoose =require("mongoose")

const User=require("./model/schema")
const app=express()

app.set("view engine","ejs")

app.use(express.urlencoded({extended:false}));


const dbUrl="mongodb+srv://gogaga:gogaga@cluster0.hqtam.mongodb.net/dbgo?retryWrites=true&w=majority"

mongoose.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex: true})
.then(result=>{
    console.log("connected")
})
.catch(err=>{
    console.log(err)
})

// getting user from database

app.get("/",(req,res)=>{
    User.find()
    .then(result=>{
        res.render("index",{data:result})
    })
    .catch(err=>{
        console.log(err)
    })
    

})

// get handler for adding user in database

app.get("/adduser",(req,res)=>{
    res.render("adduser")
})


// post handler for adding user in database

app.post("/",(req,res)=>{
    const newUser=new User({
        name:req.body.name,
       
        location:req.body.location
    })
    console.log(req.user)
    newUser.save()
    .then(result=>{
        console.log(result)
        res.redirect("/")
    })
    .catch(err=>{
        console.log(err)
    })
})



app.listen(4000)