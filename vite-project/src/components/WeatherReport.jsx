import { useWeather } from '../contexts/WeatherDataProvider'
import GraphComponent from './GraphComponent';
import styles from './WeatherReport.module.css'

function WeatherReport() {
  const { isLoading, formattedDate, userLocale, userCountry, weather, airComponents, airIndex} = useWeather();

  const data = {
    labels: Object.keys(airComponents),
    datasets: [
      {
        label: "µg/m³",
        data: Object.values(airComponents),
        backgroundColor: [
          "rgba(0, 123, 255, 0.8)",    // Dark Blue
          "rgba(40, 167, 69, 0.8)",    // Dark Green
          "rgba(255, 159, 64, 0.8)",   // Dark Orange
          "rgba(220, 53, 69, 0.8)",    // Dark Red
          "rgba(23, 162, 184, 0.8)",   // Dark Teal
          "rgba(108, 117, 125, 0.8)",  // Dark Gray
          "rgba(255, 193, 7, 0.8)",    // Dark Yellow
          "rgba(255, 87, 34, 0.8)",    // Dark Coral   
        ],
        borderColor: [
          "rgba(0, 123, 255, 1)",      // Dark Blue
          "rgba(40, 167, 69, 1)",      // Dark Green
          "rgba(255, 159, 64, 1)",     // Dark Orange
          "rgba(220, 53, 69, 1)",      // Dark Red
          "rgba(23, 162, 184, 1)",     // Dark Teal
          "rgba(108, 117, 125, 1)",    // Dark Gray
          "rgba(255, 193, 7, 1)",      // Dark Yellow
          "rgba(255, 87, 34, 1)",      // Dark Coral
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={styles.weatherBoard}>
      <div className={styles.locationWeather}>
        <div className={styles.timeLocation}>
          <div className={styles.time}>
            {formattedDate}
          </div>
          <div className={styles.location}>
            {isLoading ? '' : `${userLocale}, ${userCountry}`}
          </div>
        </div>

        <div className={styles.weatherEmoji}>
          <span>
            {weather.temp < 10 && '🥶'}
            {weather.temp > 10 && weather.temp < 25 &&'⛅'}
            {weather.temp > 25 && weather.temp < 40 &&'☀'}
          </span>
        </div>

        <div className={styles.weather}>
          <p className={styles.weatherTitle}>Today's weather</p>
          <div className={styles.weatherData}>
            {isLoading ? '' : `${weather.temp}°C`}
          </div>
        </div>
      </div>

      <div className={styles.airQuality}>
        <GraphComponent data={data} type={'bar'} title={`Air quality index: ${airIndex}`} labelColor={'white'}/>
      </div>
    </div>
  )
}

export default WeatherReport