


function Weather({deatil,temp,settemp}){
    console.log(temp)
    return(


<div className="weather">

            <h2><img src={ `https://openweathermap.org/img/wn/${deatil.weather[0].icon}@2x.png`}/> {temp}°C <img src={  `https://openweathermap.org/img/wn/${deatil.weather[0].icon}@2x.png `}/></h2>
          <small>{deatil.weather[0].main}</small>
          {}
        </div>
    )
}
export default Weather;