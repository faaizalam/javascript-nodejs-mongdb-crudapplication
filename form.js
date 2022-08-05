import express  from "express";
import cors from "cors"
import mongoose from "mongoose";
import path from "path"
import dotenv from "dotenv"

import expressAsyncHandler from'express-async-handler'
import Routersig from "../javascriptpro.js/signinrouter.js";

dotenv.config()


const __dirname= path.resolve()
const app =express()
// app.use(express.static('public'))
app.use(express.static(path.join(__dirname ,'public')))
// app.use('*',express.static(path.join(__dirname ,'public/form.html')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors());



mongoose.connect("mongodb://localhost:27017/normaljavsc"||process.env.MONGODB_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("been connected")
    
}).catch((error)=>{
    
    console.log(error)
})

// app.get('/',(req,res)=>{
    //     res.send('hello')
    
    // })
    const formScehma= new mongoose.Schema({
    name:{type:String},
    fathername:{type:String},
    mothername:{type:String}
})
const Userdata =mongoose.model('firsttime',formScehma)

app.post("/love",expressAsyncHandler(async(req,res)=>{
    const datss= new Userdata({
        name:req.body.name,
        fathername:req.body.fathername,
        mothername:req.body.mothername,
    })
    const savingdata=await datss.save();
    if (savingdata) {
         res.redirect("/thank.html")
        
    }else{
        res.status(401).send({message:"not submitted"})
    }
     


    
}))

app.get('/postman/faaizdata',expressAsyncHandler(async(req,res)=>{
    const datas= await Userdata.find({})
    res.send(datas)
    
    
}))
app.delete('/postman/faaizdata/deletes/:id',expressAsyncHandler(async(req,res)=>{
    const respsss= await Userdata.findByIdAndDelete(req.params.id)
    if (respsss) {
        
        res.send(respsss)
        
    }else{
        res.send({message:'not found'})
    }
    
}))



app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message})
    
})
app.get("/",(req,res)=>{
    // res.set({
        //     "Allow-access-Allow-Origin":'*'
        // })
        res.redirect('form.html')
    })
    app.get("/contact",(req,res)=>{
        res.redirect('/contact.html')
    })
    
    app.get("/signin",(req,res)=>{
        res.redirect('/sigin.html')
        
    })
    app.get("/upload",(req,res)=>{
        res.redirect('/upload.html')
        
    })
    app.get("/Register",(req,res)=>{
        res.redirect('/Register.html')
        
    })
    
    // app.use('/postman/sig',Routersig);
    app.use('/postman/sig',Routersig);
    app.use('/postman/new',Routersig);
app.post('/postman/upload',(req,res)=>{

    console.log(req.body.formdata) 
    
})


// app.use((err,req,res,next)=>{
//     res.send({message:err.message})
// })
app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message})
})

const port =5000||process.env.PORT

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)

})


