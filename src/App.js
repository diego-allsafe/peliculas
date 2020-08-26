import React from 'react';
import ContenedorPublicidad from './components/ContenedorPublicidad';
import Contador from './components/Contador';
import TiraPeliculas from './components/TiraPeliculas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
            <ContenedorPublicidad>
                <h2>Wooow!! Publicidad</h2>
            </ContenedorPublicidad>
            <TiraPeliculas />
            <Contador inicial={0}/>
            <ContenedorPublicidad>
              <ul>
                <li>Public 1</li>
                <li>Public 2</li>
                <li>Public 3</li>
              </ul>
            </ContenedorPublicidad>
        </main>
      </header>
    </div>
  );
}

export default App;
