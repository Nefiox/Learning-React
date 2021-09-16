import React from 'react';
import Pelicula from './Pelicula';


function TiraPeliculas() {
    return (
        <div>
            <Pelicula titulo = "Avengers" rating="9.2" awards="3" genres={["Ciencia ficción", "Misterio"]} />
            <Pelicula titulo = "Parasite" rating="10" awards="10" genres={["Acción", "Drama"]} />
            <Pelicula titulo = "Toy Story" rating="8" awards="4" genres={["Drama", "Ciencia ficción"]} />
            <Pelicula titulo = "Her" rating="6" awards="1" genres={["Acción", "Misterio"]} />
        </div>
    );
  }

export default TiraPeliculas;