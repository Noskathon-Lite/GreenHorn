import { NavLink } from "react-router-dom"
import styles from './NavBar.module.css'
import logo from '../assets/logo.png'
import { useState } from "react";

function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  function setDark(){
    document.documentElement.classList.toggle('dark-mode');
    setDarkMode(!darkMode);
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <NavLink to='/homePage'>
          <img src={logo} alt='logo'/>
        </NavLink>
      </div>
      <ul>
        <li><NavLink to='/homePage'>Home</NavLink></li>
        <li><NavLink to='/contributions'>Contributions</NavLink></li>
        {/* <li><NavLink to='/aboutUs'>About Us</NavLink></li> */}
        <li><NavLink to='/profile'>Profile</NavLink></li>
        <li><span onClick={() =>setDark()}>{darkMode ? '🌙' : '🌞'}</span></li>
      </ul>
    </nav>
  )
}

export default NavBar;