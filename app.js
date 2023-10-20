const input =document.querySelector('.in') 
const form =document.querySelector('.f') 
const div =document.querySelector('.div') 


form.addEventListener('submit' , (e)=>{
e.preventDefault();
axios.get(`http://api.weatherapi.com/v1/current.json?key=7d605a9992aa473da80153421231710&q=${input.value}`)
.then((res)=>{
    const dataa =res.data
    console.log(dataa)
    
div.innerHTML +=`<div class ="div-js">
<h1 class="name">${dataa.location.name}</h1>
<p class='date'>${dataa.location.localtime} , ${dataa.location.country}</p>
<div class="center">
 <img src="${dataa.current.condition.icon}" class="image">
 <p class="text">${dataa.current.condition.text}</p>
</div>
</div>`
       
})
.catch((err)=>{
   console.log(err)
})

    input.value=''
})

