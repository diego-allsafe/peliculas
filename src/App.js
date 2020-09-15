import React from 'react';
import ContenedorPublicidad from './components/ContenedorPublicidad';
import TiraPeliculas from './components/TiraPeliculas';
import Contador from './components/Contador';
import Gif from './components/gif';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
        <main>
            <Gif/>
            <ContenedorPublicidad>
                <h2>Wooow!! Publicidad</h2>
            </ContenedorPublicidad>
            <TiraPeliculas />
            <Contador inicial={0} />
            
            <ContenedorPublicidad>
              <ul>
                <li>Public 1</li>
                <li>Public 2</li>
                <li>Public 3</li>
              </ul>
            </ContenedorPublicidad>
        </main>
    </div>
  );
}

export default App;
