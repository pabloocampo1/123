import PropTypes from 'prop-types';

const ClimaComponents = ({ dateClima, Kelvin }) => {
    return (
        <>
            {dateClima && (
                <div className='container-clima_description'>
                    <h2>{dateClima.name} - {dateClima.sys.country}</h2>
                    <img src={` https://openweathermap.org/img/wn/${dateClima.weather[0].icon}@2x.png`} />
                    <p>{parseInt(dateClima?.main?.temp - Kelvin)}°C</p>
                    <div className='container-clima_dates'>
                        <b>Description: <p>{dateClima.weather[0].description}</p></b>
                        <b>Temp: <p> {parseInt(dateClima?.main?.temp - Kelvin)}°C</p></b>
                        <b>Humidity: <p>{dateClima.main.humidity}</p></b>
                        <b>Pressure: <p>{dateClima.main.pressure}</p></b>
                        <b>Sunrise: <p>{new Date(dateClima.sys.sunset * 1000).toLocaleTimeString()}</p></b>
                        <b>Sunset: <p>{new Date(dateClima.sys.sunrise * 1000).toLocaleTimeString()}</p></b>
                    </div>

                </div>
            )}

        </>
    )
}
ClimaComponents.propTypes = {
    dateClima: PropTypes.object,
    Kelvin: PropTypes.number,
};

export default ClimaComponents
