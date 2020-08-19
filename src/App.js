import React from 'react';
import logo from './logo.svg';

import TiraPeliculas from './components/TiraPeliculas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
            <TiraPeliculas />
            <TiraPeliculas />
        </main>
      </header>
    </div>
  );
}

export default App;
