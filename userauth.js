 import bcrypt from "bcryptjs"
 const  Datauser ={

     User:[{
         
         
         name:"faaiz",
         email:"usamaalam1999@gmail.com",
         password:bcrypt.hashSync("faaiz"),
         isAdmin:true
         
        },
        {
         name:"alam",
         email:"faaizalam1999@gmail.com",
         password:bcrypt.hashSync("faaizalam"),
         isAdmin:false
         
         
        }
    
    ]
        
    }
    export default Datauser
