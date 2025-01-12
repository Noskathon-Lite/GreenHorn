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
    <nav className="{styles.nav}">
        <div className={styles.logo}>
        <NavLink to='/'>
          <img src={logo} alt='logo'/>
        </NavLink>
      </div>
<ul>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/contributions'>Contribution</NavLink></li>
    <li><NavLink to='/aboutus'>AboutUs</NavLink></li>
    <li><NavLink to='/profile'>Profile</NavLink></li>
    <li><span onClick={() =>setDark()}>{darkMode ? '🌙' : '🌞'}</span></li>
    
    </ul>
    </nav>
 )

}

export default NavBar
