// import './App.css';
// import TiraPeliculas from './components/TiraPeliculas';
// import ContenedorPublicidad from './components/ContenedorPublicidad'
// import Contador from './components/Contador'
// import Gif from './components/Gif'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Products from './components/Products'
import NotFound from './components/NotFound'
import Frutas from './components/Frutas'
import FrutasVersion from './components/FrutasVersion'
import RickMortyClass from './components/RickMortyClass'
import RickMortyHook from './components/RickMortyHook'

import {Link, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link> <br/>
      <Link to="/about">About</Link> <br/>
      <Link to="/frutas">Frutas</Link> <br/>
      <Link to="/frutasversion">Frutas Version</Link> <br/>
      <Link to="/rickmorty-class">Rick & Morty Class</Link> <br/>
      <Link to="/rickmorty-hook">Rick & Morty Hook</Link> <br/>
      <Link to="/contact">Contact</Link> <br/>
      <Link to="/products/1">Products</Link> <br/>
      <Link to="/no-existe">No existe</Link> <br/>
      <hr/>
      {/* <header className="App-header">

      </header> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/frutas" component={Frutas} />
        <Route exact path="/frutasversion" component={FrutasVersion} />
        <Route exact path="/rickmorty-class" component={RickMortyClass} />
        <Route exact path="/rickmorty-hook" component={RickMortyHook} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/products/:id" component={Products} />
        <Route component={NotFound} />
      </Switch>
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