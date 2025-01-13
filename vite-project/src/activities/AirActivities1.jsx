import { useState } from 'react';
import styles from './AirActivities1.module.css';

function AirActivities1() {
  const [travelledFootCycle, setTravelledFootCycle] = useState('');
  const [travelledElectricVehicle, setTravelledElectricVehicle] = useState('');
  const [savedCarbon, setSavedCarbon] = useState({
    footOrCycle: 0,
    electricVehicle: 0,
  });
  const [activeSections, setActiveSections] = useState({
    footOrCycle: false,
    electricVehicle: false,
  });

  function toggleActivity(section) {
    setActiveSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }

  function contribute(type, travelled) {
    const travelledNum = parseFloat(travelled);
    if (isNaN(travelledNum)) return; 

    let newSavedCarbon = { ...savedCarbon };

    switch (type) {
      case 'footOrCycle':
        newSavedCarbon[type] += travelledNum * 160;
        break;

      case 'electricVehicle':
        newSavedCarbon[type] += travelledNum * 160 - travelledNum * 50;
        break;

      default:
        return;
    }

    setSavedCarbon(newSavedCarbon);
  }

  return (
    <div className={styles.mainAct1}>
      <p className={styles.title}>Here are some ways to improve air quality🌫</p>

      <div className={styles.mainActivity}>
        <div className={styles.first}>
          <div className={styles.head}>
            🚵‍♀️ Travel by Foot or Cycle{' '}
            <span
              onClick={() => toggleActivity('footOrCycle')}
              className={styles.moreButton}
            >
              ➕
            </span>
          </div>

          {activeSections['footOrCycle'] && (
            <div className={styles.body}>
              Distance travelled on Foot/Cycle: 
              <input
                type="number"
                value={travelledFootCycle}
                onChange={(e) => setTravelledFootCycle(e.target.value)}
                placeholder="In kms"
                className={styles.input}
              />
              <button
                className={styles.contributeButton}
                onClick={() => contribute('footOrCycle', travelledFootCycle)}
              >
                Contribute
              </button>
              <p>
                Carbon saved: {savedCarbon.footOrCycle.toFixed(2)} g
              </p>
            </div>
          )}

          <div className={styles.head}>
            🚋 Use Electric Vehicles{' '}
            <span
              onClick={() => toggleActivity('electricVehicle')}
              className={styles.moreButton}
            >
              ➕
            </span>
          </div>

          {activeSections['electricVehicle'] && (
            <div className={styles.body}>
              Distance travelled on Electric Vehicle: 
              <input
                type="number"
                value={travelledElectricVehicle}
                onChange={(e) => setTravelledElectricVehicle(e.target.value)}
                placeholder="In kms"
                className={styles.input}
              />
              <button
                className={styles.contributeButton}
                onClick={() => contribute('electricVehicle', travelledElectricVehicle)}
              >
                Contribute
              </button>
              <p>
                Carbon saved: {savedCarbon.electricVehicle.toFixed(2)} g
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AirActivities1;