import * as React from 'react'
import {LANG_EN} from '../../src/constants';
import './App.module.css';
import Header from '../common/layout/Header';
import Footer from '../common/layout/Footer';

import { ROUTE } from '../routes'

function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
