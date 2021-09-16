import React from 'react';
import Pelicula from './Pelicula';


function TiraPeliculas() {
    return (
        <div>
            <Pelicula titulo = "Avenger" rating="9.2" awards="3"/>
            <Pelicula titulo = "Parasite" rating="10" awards="10"/>
            <Pelicula titulo = "Toy Story" rating="8" awards="4"/>
            <Pelicula titulo = "Her" rating="6" awards="1"/>
        </div>
    );
  }

export default TiraPeliculas;