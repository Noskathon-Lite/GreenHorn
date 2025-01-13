import { useState } from 'react'
import styles from './AirActivities1.module.css'

function AirActivities1() {
  const [travelled, setTravelled] = useState(null);
  const [activeSections, setActiveSections] = useState({});

  function toggleActivity(section) {
    setActiveSections((prev) => ({
      ...prev,
      [section]: !prev[section], // Toggle the specific section
    }));
  }

  return (
    <div className={styles.mainAct1}>
      <p className={styles.title}>Here are some ways to improve air quality🌫</p>
      
      <div className={styles.mainActivity}>

        <div className={styles.first}>

          <div className={styles.head}>
            🚵‍♀️ Travel by Foot or Cycle <span onClick={() => toggleActivity("footOrCycle")} className={`${styles.moreButton}`}>➕</span>
          </div>

          {activeSections['footOrCycle'] && <div className={styles.body}>Distance travelled on Foot/Cycle: <input value={travelled} onChange={e=>setTravelled(e.target.value)} placeholder='In kms'/>
            <button className={styles.contributeButton}>Contribute</button>
          </div>}

          <div className={styles.head}>
            🚋 Use electric vechiles <span onClick={() => toggleActivity("electricVechile")} className={`${styles.moreButton}`}>➕</span>
          </div>

          {activeSections['electricVechile'] && <div className={styles.body}>Distance travelled on Electric Vechile: <input value={travelled} onChange={e=>setTravelled(e.target.value)} placeholder='In kms'/>
            <button className={styles.contributeButton}>Contribute</button>
          </div>}

        </div>

      </div>
    </div>
  )
}

export default AirActivities1