import { useState, useEffect } from 'react';
import { FaLightbulb, FaPlug, FaThermometerHalf, FaSolarPanel, FaRecycle } from 'react-icons/fa';
import styles from './EnergyActivities1.module.css';

function EnergyActivities() {
  const [activeSections, setActiveSections] = useState({});
  const [savedEnergy, setSavedEnergy] = useState({
    ledBulbs: 0,
    unplugDevices: 0,
    thermostat: 0,
    solarPanels: 0,
    energyEfficientAppliances: 0,
  });
  const [inputValues, setInputValues] = useState({
    ledBulbs: '',
    unplugDevices: '',
    thermostat: '',
    solarPanels: '',
    energyEfficientAppliances: '',
  });

  useEffect(() => {
    const savedData = localStorage.getItem('energySaved');
    if (savedData) {
      setSavedEnergy(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('energySaved', JSON.stringify(savedEnergy));
  }, [savedEnergy]);

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

    let energySaved = 0;
    if (type === 'ledBulbs') energySaved = value * 7;
    if (type === 'unplugDevices') energySaved = value * 5;
    if (type === 'thermostat') energySaved = value * 20;
    if (type === 'solarPanels') energySaved = value * 300;
    if (type === 'energyEfficientAppliances') energySaved = value * 50;

    setSavedEnergy((prev) => ({
      ...prev,
      [type]: prev[type] + energySaved,
    }));
    setInputValues((prev) => ({
      ...prev,
      [type]: '',
    }));
  }

  const totalEnergySaved = Object.values(savedEnergy).reduce((sum, val) => sum + val, 0);

  return (
    <div className={styles.mainEnergy}>
      <p className={styles.title}>🌍 Help Save Energy and Reduce Your Carbon Footprint! ⚡</p>
      <div className={styles.totalSaved}>
        <h3>Total Energy Saved:</h3>
        <p className={styles.savedValue}>{totalEnergySaved.toFixed(2)} kWh</p>
      </div>
      <div className={styles.activities}>
        <div className={styles.activity}>
          <div className={styles.head} onClick={() => toggleActivity('ledBulbs')}>
            <FaLightbulb className={styles.icon} />
            Replace Traditional Bulbs with LED Bulbs
            <span className={styles.toggle}>{activeSections.ledBulbs ? '➖' : '➕'}</span>
          </div>
          {activeSections.ledBulbs && (
            <div className={styles.body}>
              <p>Number of LED bulbs replaced:</p>
              <input
                type="number"
                value={inputValues.ledBulbs}
                onChange={(e) => handleInputChange('ledBulbs', e.target.value)}
                placeholder="Enter count"
              />
              <button onClick={() => contribute('ledBulbs')}>Contribute</button>
            </div>
          )}
        </div>
        <div className={styles.activity}>
          <div className={styles.head} onClick={() => toggleActivity('unplugDevices')}>
            <FaPlug className={styles.icon} />
            Unplug Unused Devices
            <span className={styles.toggle}>{activeSections.unplugDevices ? '➖' : '➕'}</span>
          </div>
          {activeSections.unplugDevices && (
            <div className={styles.body}>
              <p>Number of devices unplugged:</p>
              <input
                type="number"
                value={inputValues.unplugDevices}
                onChange={(e) => handleInputChange('unplugDevices', e.target.value)}
                placeholder="Enter count"
              />
              <button onClick={() => contribute('unplugDevices')}>Contribute</button>
            </div>
          )}
        </div>
        <div className={styles.activity}>
          <div className={styles.head} onClick={() => toggleActivity('thermostat')}>
            <FaThermometerHalf className={styles.icon} />
            Adjust Thermostat Settings
            <span className={styles.toggle}>{activeSections.thermostat ? '➖' : '➕'}</span>
          </div>
          {activeSections.thermostat && (
            <div className={styles.body}>
              <p>Degrees adjusted (°C):</p>
              <input
                type="number"
                value={inputValues.thermostat}
                onChange={(e) => handleInputChange('thermostat', e.target.value)}
                placeholder="Enter degrees"
              />
              <button onClick={() => contribute('thermostat')}>Contribute</button>
            </div>
          )}
        </div>
        <div className={styles.activity}>
          <div className={styles.head} onClick={() => toggleActivity('solarPanels')}>
            <FaSolarPanel className={styles.icon} />
            Install Solar Panels
            <span className={styles.toggle}>{activeSections.solarPanels ? '➖' : '➕'}</span>
          </div>
          {activeSections.solarPanels && (
            <div className={styles.body}>
              <p>Number of solar panels installed:</p>
              <input
                type="number"
                value={inputValues.solarPanels}
                onChange={(e) => handleInputChange('solarPanels', e.target.value)}
                placeholder="Enter count"
              />
              <button onClick={() => contribute('solarPanels')}>Contribute</button>
            </div>
          )}
        </div>
        <div className={styles.activity}>
          <div className={styles.head} onClick={() => toggleActivity('energyEfficientAppliances')}>
            <FaRecycle className={styles.icon} />
            Use Energy-Efficient Appliances
            <span className={styles.toggle}>{activeSections.energyEfficientAppliances ? '➖' : '➕'}</span>
          </div>
          {activeSections.energyEfficientAppliances && (
            <div className={styles.body}>
              <p>Number of appliances upgraded:</p>
              <input
                type="number"
                value={inputValues.energyEfficientAppliances}
                onChange={(e) => handleInputChange('energyEfficientAppliances', e.target.value)}
                placeholder="Enter count"
              />
              <button onClick={() => contribute('energyEfficientAppliances')}>Contribute</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EnergyActivities;