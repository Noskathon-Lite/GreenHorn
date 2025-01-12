import { useState } from 'react'
import styles from './AirActivities1.module.css'

function AirActivities1() {
  const [isActive, setIsActive] = useState(false);
  const [travelled, setTravelled] = useState(null);

  function showActivity(){
    setIsActive(!isActive);
  }

  return (
    <div className={styles.mainAct1}>
      <p className={styles.title}>Here are some ways to improve air quality🌫</p>
      
      <div className={styles.mainActivity}>

        <div className={styles.first}>
        <div className={styles.head}>
           🚵‍♀️Travel by Foot or Cycle <span onClick={showActivity} className={`${styles.moreButton}`}>➕</span>
        </div>

        {isActive && <div className={styles.body}>Distance travelled: <input value={travelled} onChange={e=>setTravelled(e.target.value)} placeholder='In kms'/>
          <button className={styles.contributeButton}>Contribute</button>
        </div>}

        </div>

      </div>
    </div>
  )
}

export default AirActivities1