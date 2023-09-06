import React from "react";
import {Link} from "react-router-dom";
import './styles.css';

import logo from '../shared/logo.svg'

const NavBar = () => {
return(
    <nav className="nav-bar">
      <img src={logo} alt="" />
      <span className="line"></span>
      <ul className="nav-list">
        <li>
          <Link to='/'><span>00</span> HOME</Link>
        </li>
        <li>
        <Link to='/destination'><span>01</span> DESTINATION</Link>
        </li>
        <li>
          <Link to='/crew'><span>02</span> CREW</Link>
        </li>
        <li>
        <Link to='/technology'><span>03</span> TECHNOLOGY</Link>
        </li> 
      </ul>
    </nav>
);
}

export default NavBar;