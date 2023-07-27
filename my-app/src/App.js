import logo from './logo.svg';
import './App.css';
import {useState} from"react"

import Weather from './weather';
function App() {
  const apiKey = "326f5727cf2d491bc5109921ffa1ca40";
   const[search,setsearch]=useState(" ")
const[deatil,setdetail]=useState({})
const[temp,settemp]=useState({})
const[show,setshow]=useState(false)
 
const updatevalue=(e)=>{
  setsearch(e.target.value)
  getWeather(e.target.value)
  setshow(!show)
 }
 
   const  getWeather=async(city)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
         const resp = await fetch(url, {
             origin: "cros" });
         const data = await resp.json();
         setdetail(data)
         settemp(data.main.temp )
     console.log(data)
   }
   console.log(temp)
   
  return (
    
       <div>
        <div>
       <input type="text" id="search" placeholder="Search By Loaction" onClick={updatevalue} autocomplete="off"/>
       </div>
          {
            show &&
            <Weather deatil={deatil} temp={temp} settemp={settemp}/>
}
       </div>
  );
}

export default App;
