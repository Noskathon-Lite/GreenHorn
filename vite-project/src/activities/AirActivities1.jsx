import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styles from './AirActivities1.module.css';

function AirActivities1() {
  const [activeSections, setActiveSections] = useState({});
  const [savedCarbon, setSavedCarbon] = useState({
    footOrCycle: 0,
    electricVechile: 0,
    publicTransport: 0,
    carpooling: 0,
    electricScooter: 0,
    solarEnergy: 0,
  });

  const [travelledDistances, setTravelledDistances] = useState({
    footOrCycle: 0,
    electricVechile: 0,
    publicTransport: 0,
    carpooling: 0,
    electricScooter: 0,
  });

  function toggleActivity(section) {
    setActiveSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }

  function contribute(type) {
    const travelled = travelledDistances[type];
    if (travelled <= 0) return; 
    let carbonSaved = 0;

    switch (type) {
      case 'footOrCycle':
        carbonSaved = travelled * 160; 
        break;

      case 'electricVechile':
        carbonSaved = travelled * 160 - travelled * 50;
        break;

      case 'publicTransport':
        carbonSaved = travelled * 50; 
        break;

      case 'carpooling':
        carbonSaved = travelled * 100; 
        break;

      case 'electricScooter':
        carbonSaved = travelled * 30; 
        break;

      case 'solarEnergy':
        carbonSaved = 200; 
        break;

      default:
        return;
    }

    setSavedCarbon((prev) => ({
      ...prev,
      [type]: (prev[type] || 0) + carbonSaved,
    }));

    if (type !== 'solarEnergy') {
      setTravelledDistances((prev) => ({
        ...prev,
        [type]: 0,
      }));
    }
  }

  return (
    <div className={styles.mainAct1}>
      <p className={styles.title}>Here are some ways to improve air quality🌫</p>
      
      <div className={styles.totalCarbon}>
        <h2>Total Carbon Saved: {Object.values(savedCarbon).reduce((acc, val) => acc + val, 0)} g</h2>
      </div>

      <div className={styles.mainActivity}>
        <div className={styles.first}>
          
          <div className={styles.head}>
            🚵‍♀️ Travel by Foot or Cycle 
            <span 
              onClick={() => toggleActivity("footOrCycle")} 
              className={`${styles.moreButton}`}>
              {activeSections['footOrCycle'] ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>

          {activeSections['footOrCycle'] && (
            <div className={styles.body}>
              Distance travelled:
              <input
                type="number"
                value={travelledDistances.footOrCycle}
                onChange={(e) => setTravelledDistances((prev) => ({ ...prev, footOrCycle: e.target.value }))}
                placeholder="In kms"
                min="0"
              />
              <button
                className={styles.contributeButton}
                onClick={() => contribute('footOrCycle')}
              >
                Contribute
              </button>
            </div>
          )}

          <div className={styles.head}>
            🚋 Use Electric Vehicles
            <span
              onClick={() => toggleActivity("electricVechile")}
              className={`${styles.moreButton}`}>
              {activeSections['electricVechile'] ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>

          {activeSections['electricVechile'] && (
            <div className={styles.body}>
              Distance travelled:
              <input
                type="number"
                value={travelledDistances.electricVechile}
                onChange={(e) => setTravelledDistances((prev) => ({ ...prev, electricVechile: e.target.value }))}
                placeholder="In kms"
                min="0"
              />
              <button
                className={styles.contributeButton}
                onClick={() => contribute('electricVechile')}
              >
                Contribute
              </button>
            </div>
          )}

          <div className={styles.head}>
            🚍 Use Public Transport
            <span
              onClick={() => toggleActivity("publicTransport")}
              className={`${styles.moreButton}`}>
              {activeSections['publicTransport'] ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>

          {activeSections['publicTransport'] && (
            <div className={styles.body}>
              Distance travelled:
              <input
                type="number"
                value={travelledDistances.publicTransport}
                onChange={(e) => setTravelledDistances((prev) => ({ ...prev, publicTransport: e.target.value }))}
                placeholder="In kms"
                min="0"
              />
              <button
                className={styles.contributeButton}
                onClick={() => contribute('publicTransport')}
              >
                Contribute
              </button>
            </div>
          )}

          <div className={styles.head}>
            🚗 Carpooling
            <span
              onClick={() => toggleActivity("carpooling")}
              className={`${styles.moreButton}`}>
              {activeSections['carpooling'] ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>

          {activeSections['carpooling'] && (
            <div className={styles.body}>
              Distance travelled:
              <input
                type="number"
                value={travelledDistances.carpooling}
                onChange={(e) => setTravelledDistances((prev) => ({ ...prev, carpooling: e.target.value }))}
                placeholder="In kms"
                min="0"
              />
              <button
                className={styles.contributeButton}
                onClick={() => contribute('carpooling')}
              >
                Contribute
              </button>
            </div>
          )}

          <div className={styles.head}>
            🛴 Use Electric Scooter
            <span
              onClick={() => toggleActivity("electricScooter")}
              className={`${styles.moreButton}`}>
              {activeSections['electricScooter'] ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>

          {activeSections['electricScooter'] && (
            <div className={styles.body}>
              Distance travelled:
              <input
                type="number"
                value={travelledDistances.electricScooter}
                onChange={(e) => setTravelledDistances((prev) => ({ ...prev, electricScooter: e.target.value }))}
                placeholder="In kms"
                min="0"
              />
              <button
                className={styles.contributeButton}
                onClick={() => contribute('electricScooter')}
              >
                Contribute
              </button>
            </div>
          )}

          <div className={styles.head}>
            ☀️ Use Solar Energy
            <span
              onClick={() => toggleActivity("solarEnergy")}
              className={`${styles.moreButton}`}>
              {activeSections['solarEnergy'] ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>

          {activeSections['solarEnergy'] && (
            <div className={styles.body}>
              <p>By using solar energy, your household can save up to 200g of carbon emissions per day.</p>
              <button
                className={styles.contributeButton}
                onClick={() => contribute('solarEnergy')}
              >
                Contribute
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AirActivities1;