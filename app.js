const input =document.querySelector('.in') 
const form =document.querySelector('.f') 
const div =document.querySelector('.div') 


form.addEventListener('submit' , (e)=>{
e.preventDefault();
axios.get(`https://api.weatherapi.com/v1/current.json?key=7d605a9992aa473da80153421231710&q=${input.value}`)
.then((res)=>{
    const dataa =res.data
    console.log(dataa)
    
div.innerHTML +=`<div class ="div-js">
<h1 class="name">${dataa.location.name}</h1>
<p class='date'>${dataa.location.localtime} , ${dataa.location.country}</p>
<div class='div-2'>

<div>
<img src="${dataa.current.condition.icon}" class="image"></div>

<div>
 <p class='temp'> ${dataa.current.temp_c}<sup>°</sup> C</p>
</div>
 
 <div>
<p class="light">${dataa.current.condition.text}</p>
<p class="feels">Feels&nbsp;&nbsp${dataa.current.feelslike_c}</p>
</div>
</div>

<div class='div-3'>

<div>
<p class='app-text'>Humidity</p>
<p class='app-text'>&nbsp;&nbsp;&nbsp${dataa.current.humidity}&nbsp%</p>
</div>


<div>
<p class='app-text'>pressure</p>
<p class='app-text'>&nbsp;&nbsp${dataa.current.pressure_mb}&nbspmb</p>
</div>

<div>
<p class='app-text'>wind speed</p>
<p class='app-text'>&nbsp;&nbsp${dataa.current.wind_kph}&nbspkph</p>
</div>

<div>
<p class='app-text'>wind  Degree</p>
<p class='app-text'>&nbsp;&nbsp${dataa.current.wind_degree}&nbsp<sup>°</sup> C</p>
</div>

</div>

 
 

</div>`
       
})
.catch((err)=>{
   console.log(err)
})

    input.value=''
})

