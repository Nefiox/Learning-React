import React, { Component } from 'react';
import Pelicula from './Pelicula';


class TiraPeliculas extends Component {
    lanzarAlerta() {
        alert('Click, click!')
    }

    cambiarAmarillo() {
        document.querySelector("body").style.backgroundColor = "yellow";
    }
    
    cambiarARosa() {
        document.querySelector("body").style.backgroundColor = "pink";

    }


    render() {
        return (
        <div onClick={ this.lanzarAlerta } onMouseOver={ this.cambiarAmarillo } onMouseOut={ this.cambiarARosa }>
            <Pelicula titulo = "Avengers" rating="9.2" awards="3" generos={["Ciencia ficción", "Misterio"]} />
            <Pelicula titulo = "Parasite" rating="10" awards="10" generos={["Acción", "Drama"]} />
            <Pelicula titulo = "Toy Story" rating="8" awards="4" generos={["Drama", "Ciencia ficción"]} />
            <Pelicula titulo = "Her" rating="6" awards="1" generos={["Acción", "Misterio"]} />
        </div>
    );
    }
  }

export default TiraPeliculas;