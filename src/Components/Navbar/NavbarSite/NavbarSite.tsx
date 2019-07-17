import React from "react";
import { Link } from "react-router-dom";

import logo from "./../../../logo.svg";

import "./NavbarSite.scss";

class NavbarSite extends React.Component {
  render() {
    return (
      <nav className='site-navbar navbar navbar-expand-lg'>
        <a className='navbar-brand' href='/icebox'>
          <img src={logo} />
          icebox
        </a>
        <div className='collapse navbar-collapse d-sm-inline-flex flex-sm-row-reverse'>
          <ul className='navbar-nav ml-auto' id='navList'>
            <li className='nav-item'>
              <Link to='/signup' className='nav-link'>
                Signup
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/login' className='nav-link'>
                Login
              </Link>
            </li>
            <li className='nav-item' hidden>
              <Link to='/foodlib' className='nav-link'>
                Food Library
              </Link>
            </li>
            <li className='nav-item' hidden>
              <Link to='/grocery' className='nav-link'>
                Grocery List
              </Link>
            </li>
            <li className='nav-item' hidden>
              <Link to='/stats' className='nav-link'>
                Stats
              </Link>
            </li>
            <li className='nav-item' hidden>
              <Link to='/calendar' className='nav-link'>
                Calendar
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavbarSite;
