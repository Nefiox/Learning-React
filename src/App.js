// import './App.css';
import TiraPeliculas from './components/TiraPeliculas';
import ContenedorPublicidad from './components/ContenedorPublicidad'
import Contador from './components/Contador'
import Gif from './components/Gif'

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <main>
        <Gif />
        <ContenedorPublicidad>
          <h2>Wooow! Publicidad!</h2>
        </ContenedorPublicidad>
        <TiraPeliculas />
        <Contador inicial={0} />
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