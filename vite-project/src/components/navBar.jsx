import { NavLink } from "react-router-dom"

import styles from './NavBar.module.css'
import logo from '../assests/logo.png'
import { useState } from "react";

function NavBar() {
 const [darkMode, setDarkMode] = useState(false);

 function setDarkMode(){
    document.documentElement.classList.toggle('dark-made');
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
    <li><Navlink to='/'>Home</Navlink></li>
    <li><Navlink to='/contributions'>Contribution</Navlink></li>
    <li><Navlink to='/aboutus'>AboutUs</Navlink></li>
    <li><Navlink to='/profile'>Profile</Navlink></li>
    <li><span onClick={() =>setDark()}>{darkMode ? '🌙' : '🌞'}</span></li>
    
    </ul>
    </nav>
 )

}
