document.getElementById('file-upload').addEventListener('change',async(e)=>{
    e.preventDefault()
    const file=e.target.files[0]
    const formdata = new FormData();
    formdata.append('image',file);
    console.log(Array.from(formdata))

    // showloading()
    const response = await axios.post("/postman/upload",formdata,{

        headers:{
         
            'Content-Type':'multipart/form-data',
        },
    }
     
    
    )
    // hidloading()
    if (!response.data) {
        alert("error")
        
    }else{
        alert('sucss')
        // document.getElementById('image').value=data.image;
    }

})