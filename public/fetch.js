const arr=[{id:1},{id:2}]
const y=arr.find((x)=>x.id==='1')
console.log(y)

let st=true

const edits=((id,x)=>{
    // console.log(id.id)

  if (st) {
    
    
    var input=`
    <tr>
     <input type="text" id="${x}" placeholder="mother name"/>
     <input type="text"  id="${x}" placeholder="name"/>
     <input type="text"  id="${x}" placeholder="father name"/>
     </tr>
     
    `
    id.insertAdjacentHTML("afterend",input)
    
    //   id.in(input)
      st=false
      
    }else{
      var checkposition=  document.getElementById(`${x}`)
       
     

  
   
      

          if (checkposition.id===x) {
            
                document.getElementById(`${x}`).remove()
                document.getElementById(`${x}`).remove()
                document.getElementById(`${x}`).remove()
            
              st=true
              
          }else if(!checkposition.id){
            alert("not same")
          }
          

  }







})




        document.getElementById("contact").addEventListener('submit',async(e)=>{
            e.preventDefault()
            const name= document.getElementById('name').value
            const fathername= document.getElementById('fathername').value
            const mothername= document.getElementById('mother').value

            try {
        // console.log(name,fathername,mothername)
        const response=await axios.post('/love',{name,fathername,mothername})
        
        window.location.assign("/form.html")
        // const datas=resp.data
        // if (response.data) {
            
        // }
        console.log(response.data)
        
        
        
    } catch (error) {
        console.log(error.message)
        }
        })
    //     const contact = async()=>{
    //         // e.preventDefault();
            
    
    // // try {
    // //     // console.log(name,fathername,mothername)
    // //     const resp=await axios.post('/love',{name,fathername,mothername})
        
    // //     const datas=resp.data
        
        
        
    // // } catch (error) {
    // //     console.log(error.message)
        
    // }
    
    
    
    
    
// }

// edits()







const getdata = async()=>{
    
    try {
        
        const response= await axios.get('http://localhost:5000/postman/faaizdata',
        // method:'GET',
        // headers:{
            //     'Content-Type':'application/json',
            // }
            )
            
            
            
            if (!response) {
                throw new Error(response.data.message)
                
            }else{
                
                console.log(response.data)
                
                
                // $html='';
                
                
                
                response.data.map((x)=>{
                    var htt= 
                    
                    `
                    <tr>
                    <td>${x.name}</td>
                    <td>${x.fathername}</td>
                    <td>${x.mothername}</td>
                    <td>${x._id}</td>
                    
                    
                    
                    <td id="finalh"> <button type="button" class="btn btn-danger" onclick="edits(this,'${x._id}')">EDIT</button></td>
                    <td id="dis"> <button type="button"  class="btn btn-danger" onclick="deletes('${x._id}')">DELETE</button></td>
                    </tr>
                    
                    `
                    
                    var newo=`
                    <input type="text"/>

                    `
                    
                    // let seee=`${x.id}`===''?newo:htt
                    document.getElementById('tb').innerHTML +=htt
                    // console.log(exist)
                    
                })
              
                
                
                
                // console.log(edits())
                
                
                
            }
        } catch (error) {
            console.log(error.message)
            
        }
    }
   
    getdata();
    // const edits=((x)=>x)
    // console.log(ids)
    // edits
    const deletes =async(x)=>{
        
        
        try {
            
            const response=await axios.delete(`http://localhost:5000/postman/faaizdata/deletes/${x}`)
            
            const datas=response.data
            window.location.reload();
        } catch (error) {
            
            console.log(error.message)
            
        }
    }
   
    
    
    
    
    

    
    
    
    // targ.document.createElement('li')
    // document.appendChild(targ)
    
    
    // const fi=e.target.value;
    // const bests = new FormData[0]
    // bests.append('bests',fi)
    
    // const f=document.getElementById('setss')nam
    const dd=document.createElement('image')
    //
    
    
    
    const headerone=document.getElementById("headerone")
    // const hum=document.getElementById("hum")
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    // console.log(names.name)
    // console.log(password)
    
    
    
    
    // var htmlvalue=`
    
    // <ul>
    // <li>${names?names.name:''}</li>
    // </ul>
    
    // `
    // var htmlvaluetwo=`
    
    // <ul>
    
    // <a href="/signin">Admin </a> 
    // </ul>
    
    // `
    
    // const middelware=!names.name?htmlvaluetwo:htmlvalue
    // document.getElementById("profile").innerHTML=middelware
    
    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    
    
    
  