import React from 'react';
import logo from '../../logo.svg';
import './Nav.css';
const Header = () => {
  return (
    <header className='header'>
      <div className='logo-wrapper-lt'>
        <img src={logo} alt='Logo' />
        <p> LOGO </p>
      </div>
      <div className='logo-wrapper-rt'>
        <nav>
          <ul>
            <li>
              <a href='/'>Header Item 1</a>
            </li>
            <li>
              <a href='/'>Header Item 2</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
