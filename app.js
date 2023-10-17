const input =document.querySelector('.in') 
const form =document.querySelector('.f') 
const div =document.querySelector('.div') 


form.addEventListener('submit' , (e)=>{
e.preventDefault();
axios.get(`http://api.weatherapi.com/v1/current.json?key=7d605a9992aa473da80153421231710&q=${input.value}`)
.then((res)=>{

    console.log(res.data)   
})
.catch((err)=>{
   console.log(err)
})

    input.value=''
})

