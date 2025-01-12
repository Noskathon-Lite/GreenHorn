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
      <p>How about we start by using a greener means of transportatioin</p>
      <p>
        Travel <span onClick={showActivity} className={`${styles.moreButton}`}>➕</span>
      </p>
      {isActive && 
      <div className={styles.mainActivity}>
        <p>Distance travelled: <input value={travelled} onChange={e=>setTravelled(e.target.value)} placeholder='In kms'/>
        <button className={styles.contributeButton}>Contribute</button>
        </p>
      </div>}
    </div>
  )
}

export default AirActivities1