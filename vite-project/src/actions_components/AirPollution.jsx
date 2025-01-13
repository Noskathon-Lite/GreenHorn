import { useWeather } from '../contexts/WeatherDataProvider'
import styles from './AirPollution.module.css'
import AirActivities1 from '../activities/AirActivities1'
import EnergyActivities1 from '../activities/EnergyActivities1';

function AirPollution() {
  const { airIndex } = useWeather();

  if(!airIndex) return;

  if( airIndex < 3){
    return(
      <div className={styles.airMain}>
        <p className={`${styles.heading} ${styles.good}`}>Air quality index of <strong>{airIndex}</strong> is very good. Let's work on something more relevant<span>🤝</span></p>
      </div>
    );
  }

  return (
    <div className={styles.airMain}>

      <p className={`${styles.heading} ${styles.bad}`}>Air quality index of <strong>{airIndex}</strong> is very bad. Let's help improve that<span>🤝</span></p>

      <div className={styles.actionBox}>
        <AirActivities1 />
        <EnergyActivities1 />
      </div>
    </div>
  )
}

export default AirPollution