import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styles from './AirActivities1.module.css';

function AirActivities1() {
  const [travelled, setTravelled] = useState(0);
  const [activeSections, setActiveSections] = useState({});
  const [savedCarbon, setSavedCarbon] = useState({
    footOrCycle: 0,
    electricVechile: 0,
  });

  // Toggle section visibility
  function toggleActivity(section) {
    setActiveSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }

  // Calculate and store carbon savings
  function contribute(type, travelled) {
    if (travelled <= 0) return; // Prevent negative or zero contributions

    let carbonSaved = 0;

    switch (type) {
      case 'footOrCycle':
        carbonSaved = travelled * 160; // Carbon saved by foot or cycle
        break;

      case 'electricVechile':
        carbonSaved = travelled * 160 - travelled * 50; // Electric vehicle calculation
        break;

      default:
        return;
    }

    // Update the saved carbon state with the new contribution
    setSavedCarbon((prev) => ({
      ...prev,
      [type]: (prev[type] || 0) + carbonSaved,
    }));

    // Reset the travelled distance after contribution
    setTravelled(0);
  }

  return (
    <div className={styles.mainAct1}>
      <p className={styles.title}>Here are some ways to improve air quality🌫</p>
      
      {/* Total Carbon Saved Display */}
      <div className={styles.totalCarbon}>
        <h2>Total Carbon Saved Today: {Object.values(savedCarbon).reduce((acc, val) => acc + val, 0)} g</h2>
      </div>

      <div className={styles.mainActivity}>
        <div className={styles.first}>
          {/* Foot or Cycle Activity */}
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
              Distance travelled on Foot/Cycle:
              <input
                type="number"
                value={travelled}
                onChange={(e) => setTravelled(e.target.value)}
                placeholder="In kms"
                min="0"
              />
              <button
                className={styles.contributeButton}
                onClick={() => contribute('footOrCycle', travelled)}
              >
                Contribute
              </button>
            </div>
          )}

          {/* Electric Vehicle Activity */}
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
              Distance travelled on Electric Vehicle:
              <input
                type="number"
                value={travelled}
                onChange={(e) => setTravelled(e.target.value)}
                placeholder="In kms"
                min="0"
              />
              <button
                className={styles.contributeButton}
                onClick={() => contribute('electricVechile', travelled)}
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
