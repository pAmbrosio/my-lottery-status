import React from 'react';
import './App.scss';
import { faAngleDoubleDown, faStar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import Jackpot from './components/jackpot/jackpot';

library.add(faAngleDoubleDown, faStar);
/**
 *
 */
function App() {
  return (
    <div className="App">
      <Jackpot />
    </div>
  );
}

export default App;
