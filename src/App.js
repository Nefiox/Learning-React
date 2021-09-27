// import './App.css';
// import TiraPeliculas from './components/TiraPeliculas';
// import ContenedorPublicidad from './components/ContenedorPublicidad'
// import Contador from './components/Contador'
// import Gif from './components/Gif'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import {Link, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link> <br/>
      <Link to="/about">About</Link> <br/>
      <Link to="/contact">Contact</Link> <br/>
      <Link to="/no-existe">No existe</Link> <br/>
      <hr/>
      {/* <header className="App-header">

      </header> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      {/* <main>
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
      </main> */}

    </div>
  );
}

export default App;