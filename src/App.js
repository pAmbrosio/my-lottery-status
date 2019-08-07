import React from 'react';
import './App.scss';
import { faCircleNotch, faAngleDoubleDown, faStar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Jackpot from './components/jackpot/jackpot';

library.add(faCircleNotch, faAngleDoubleDown, faStar);
/**
 *
 */
function App() {
  return (
    <div className="App">
      <Jackpot />
      <div className="loading"><FontAwesomeIcon icon="circle-notch" spin size="3x" color="grey" /></div>
    </div>
  );
}

export default App;
