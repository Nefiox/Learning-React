// import './App.css';
import TiraPeliculas from './components/TiraPeliculas';
import ContenedorPublicidad from './components/ContenedorPublicidad'

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <main>
        <ContenedorPublicidad>
          <h2>Wooow! Publicidad!</h2>
        </ContenedorPublicidad>
        <TiraPeliculas />
        <TiraPeliculas />
        <ContenedorPublicidad>
          <ul>
            <li>Publicidad 1</li>
            <li>Publicidad 2</li>
            <li>Publicidad 3</li>
          </ul>          
        </ContenedorPublicidad>
      </main>
    </div>
  );
}

export default App;