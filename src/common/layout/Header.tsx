import * as React from 'react'
import style from './Footer.module.css'
import logo from '../../assets/images/logo.png';
import Navigation from './Navigation';

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
        <Navigation/>
  </header>
)

export default Header
