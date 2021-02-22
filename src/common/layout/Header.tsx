import * as React from 'react'
import Navigation from './Navigation';

import {LANG_EN} from '../../constants';


import logo from '../../assets/images/logo.png';
import './Header.module.css'

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt={LANG_EN.company} />
    <Navigation/>
  </header>
)

export default Header
