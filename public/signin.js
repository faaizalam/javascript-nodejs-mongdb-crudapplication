

 const local=(info)=>{
   localStorage.setItem('userinfo',JSON.stringify(info))
   // console.log(info)
   
  }
  
  const spread=()=>{
    const infos =  localStorage.getItem('userinfo')?JSON.parse(localStorage.getItem('userinfo')):{}
    return infos
    
  }
    // document.getElementById('').addEventListener('click',()=>{
      //   alert("kk")
      
      // })
      
      const names=spread();
      
    
    // console.log(names.name)
    // console.log(password)
    
    
    
    
    // const contact=()=>{
      
      // }
      // contact()
      
      // console.log(names)
      
      const signout=(()=>{
        localStorage.removeItem('userinfo')
        window.location.assign('/form.html')

      })
      var htmlvalue=`
      
      <ul>
      <li>${names.name}<li>
      
      <a id="rem" onclick="signout()" >Log-out</a>
      
      
      </ul>
      
      `
      
      var htmlvaluetwo=`
      <a href="/signin">Sign-in </a>
      ` 
      const middelware=!names.name?htmlvaluetwo:htmlvalue
      const div=document.getElementById("ids")
      div.insertAdjacentHTML("afterbegin",middelware)
      // div.insertAdjacentHTML('afterbegin',middelware)
      //   const c=document.getElementById("caretin").appendChild=middelware
      //   c.appendChild(middelware)
      
      

      
      
      

      
      
      
      
      
      
      
      
      
      
      document.getElementById("payload").addEventListener('submit',async(e)=>{
        e.preventDefault()
        const email =document.getElementById('email').value
        const password = document.getElementById('password').value
        try {
          const response= await axios.post('http://localhost:5000/postman/sig/end',{email,password})
          //   headers:{
            //       'Content-Type':'application/json',
            
            // console.log(response.data)
            // document.getElementById('tb').innerHTML += ht
            if(response){
              local(response.data)
              // window.location.href("/form.html")
              window.location.assign("/form.html")
              
              
            }
            
          } catch (error) 
          {
            console.log(error.response.data.message)
            
          }
          
          
          
          
        })
        
        
        
        
        // document.getElementById("payload").addEventListener('click',async()=>{
          
          // })
          
          
          // profile name
          
          
          
          
          
          
        
        