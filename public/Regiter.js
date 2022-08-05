// name
// email
// password
// con-password


document.getElementById("register").addEventListener('submit',async(e)=>{
    e.preventDefault()
   const name= document.getElementById("name").value
   const email= document.getElementById("email").value
   const password= document.getElementById("password").value
   const conpassword = document.getElementById("con-password").value


   console.log(name)
   console.log(email)
   console.log(password)
   console.log(conpassword)
   if (password!==conpassword) {
    alert('kindly put the same passwords')
    
   }else{

    try {
        const response =await axios.post('/postman/new/register',{name,email,password},)
     
        if(response.data){
            window.location.assign('/')
        }
        
    } catch (error) {
        console.log(error)
    }




   }








})