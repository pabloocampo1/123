import { useState } from "react"
import ClimaComponents from "./ClimaComponents";
import '../styles/clima.css'
import { FaSearchLocation } from 'react-icons/fa';

const Clima = () => {
  const [city, setCity] = useState('');
  const [dateClima, setDateClima] = useState(null);

// API
  const URL = "https://api.openweathermap.org/data/2.5/weather/";
  const API_key = '09b03bb06151ecae293eff5ca4afa392'
  const Kelvin = 275;

  const fetchDate = async () => {
    try {

      const response = await fetch(`${URL}?q=${city}&appid=${API_key}`);
      if (!response.ok) {
        throw new Error(alert("invalid city name, try to write a valid city"))
      }
      const date = await response.json();
      setDateClima(date)

    }
    catch (error) {
      return console.log(`error`)
    }

  }

//function

  const handleCity = (e) => {
    setCity(e.target.value)
  }

  const handleInput = (e) => {
    e.preventDefault()
    if (city.length > 0) {
      fetchDate()
    } else {
      alert("you have to write the name of a city")
    }

  }


  return (
    <div className="container-clima">
      <div className="container-clima_form" >
        <form onSubmit={handleInput} >
          <input
            type="text"
            placeholder="CITY..."
            value={city}
            onChange={handleCity}
          />
          <button>
            <FaSearchLocation size={20} />
          </button>
        </form>
      </div>
      <ClimaComponents dateClima={dateClima} Kelvin={Kelvin} city={city} />
    </div>
  )
}

export default Clima
