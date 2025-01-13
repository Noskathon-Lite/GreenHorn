import { useState, useEffect } from 'react';
import { FaShower, FaFaucet, FaToilet, FaLeaf } from 'react-icons/fa';
import styles from './WaterActivities.module.css';

function WaterConservationActivities() {
  const [activeSections, setActiveSections] = useState({});
  const [savedWater, setSavedWater] = useState({
    shorterShowers: 0,
    fixedLeaks: 0,
    waterEfficientToilets: 0,
    waterEfficientGardening: 0,
  });
  const [inputValues, setInputValues] = useState({
    shorterShowers: '',
    fixedLeaks: '',
    waterEfficientToilets: '',
    waterEfficientGardening: '',
  });

  useEffect(() => {
    const savedData = localStorage.getItem('waterSaved');
    if (savedData) {
      setSavedWater(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('waterSaved', JSON.stringify(savedWater));
  }, [savedWater]);

  function toggleActivity(section) {
    setActiveSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }

  function handleInputChange(type, value) {
    setInputValues((prev) => ({
      ...prev,
      [type]: value,
    }));
  }

  function contribute(type) {
    const value = parseFloat(inputValues[type]);
    if (!value || value <= 0) return;

    let waterSaved = 0;
    if (type === 'shorterShowers') waterSaved = value * 10;
    if (type === 'fixedLeaks') waterSaved = value * 20;
    if (type === 'waterEfficientToilets') waterSaved = value * 30;
    if (type === 'waterEfficientGardening') waterSaved = value * 15;

    setSavedWater((prev) => ({
      ...prev,
      [type]: prev[type] + waterSaved,
    }));
    setInputValues((prev) => ({
      ...prev,
      [type]: '',
    }));
  }

  const totalWaterSaved = Object.values(savedWater).reduce((sum, val) => sum + val, 0);

  return (
    <div className={styles.mainWater}>
      <p className={styles.title}>💧 Save Water, Secure the Future! 🌍</p>
      <div className={styles.totalSaved}>
        <h3>Total Water Saved:</h3>
        <p className={styles.savedValue}>{totalWaterSaved.toFixed(2)} liters</p>
      </div>
      <div className={styles.activities}>
        <div className={styles.activity}>
          <div className={styles.head} onClick={() => toggleActivity('shorterShowers')}>
            <FaShower className={styles.icon} />
            Take Shorter Showers
            <span className={styles.toggle}>{activeSections.shorterShowers ? '➖' : '➕'}</span>
          </div>
          {activeSections.shorterShowers && (
            <div className={styles.body}>
              <p>Number of shorter showers taken:</p>
              <input
                type="number"
                value={inputValues.shorterShowers}
                onChange={(e) => handleInputChange('shorterShowers', e.target.value)}
                placeholder="Enter count"
              />
              <button onClick={() => contribute('shorterShowers')}>Contribute</button>
            </div>
          )}
        </div>
        <div className={styles.activity}>
          <div className={styles.head} onClick={() => toggleActivity('fixedLeaks')}>
            <FaFaucet className={styles.icon} />
            Fix Leaking Faucets or Pipes
            <span className={styles.toggle}>{activeSections.fixedLeaks ? '➖' : '➕'}</span>
          </div>
          {activeSections.fixedLeaks && (
            <div className={styles.body}>
              <p>Number of leaks fixed:</p>
              <input
                type="number"
                value={inputValues.fixedLeaks}
                onChange={(e) => handleInputChange('fixedLeaks', e.target.value)}
                placeholder="Enter count"
              />
              <button onClick={() => contribute('fixedLeaks')}>Contribute</button>
            </div>
          )}
        </div>
        <div className={styles.activity}>
          <div className={styles.head} onClick={() => toggleActivity('waterEfficientToilets')}>
            <FaToilet className={styles.icon} />
            Install Water-Efficient Toilets
            <span className={styles.toggle}>{activeSections.waterEfficientToilets ? '➖' : '➕'}</span>
          </div>
          {activeSections.waterEfficientToilets && (
            <div className={styles.body}>
              <p>Number of toilets replaced:</p>
              <input
                type="number"
                value={inputValues.waterEfficientToilets}
                onChange={(e) => handleInputChange('waterEfficientToilets', e.target.value)}
                placeholder="Enter count"
              />
              <button onClick={() => contribute('waterEfficientToilets')}>Contribute</button>
            </div>
          )}
        </div>
        <div className={styles.activity}>
          <div className={styles.head} onClick={() => toggleActivity('waterEfficientGardening')}>
            <FaLeaf className={styles.icon} />
            Practice Water-Efficient Gardening
            <span className={styles.toggle}>{activeSections.waterEfficientGardening ? '➖' : '➕'}</span>
          </div>
          {activeSections.waterEfficientGardening && (
            <div className={styles.body}>
              <p>Square meters of garden improved:</p>
              <input
                type="number"
                value={inputValues.waterEfficientGardening}
                onChange={(e) => handleInputChange('waterEfficientGardening', e.target.value)}
                placeholder="Enter area (m²)"
              />
              <button onClick={() => contribute('waterEfficientGardening')}>Contribute</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WaterConservationActivities;
