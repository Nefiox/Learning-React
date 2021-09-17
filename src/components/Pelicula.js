import React from 'react';
import PropTypes from 'prop-types';

function Pelicula(props) {
    let listadoDeGeneros; 
    if(props.generos != null) {
        listadoDeGeneros = 
        <ul>
        { props.generos.map((genre, i) => {
            return <li key = {genre + i}> {genre} </li>
        })}
    </ul>
    } else {
        listadoDeGeneros = ""
    }
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>Rating: {props.rating}</p>
            <p>Awards: {props.awards}</p>
            { listadoDeGeneros }
        </div>
    );
  }

Pelicula.defaultProps = {
    rating: 'Esta película aún no fue puntuada',
    generos: null
}

Pelicula.propTypes = {
    rating: PropTypes.string,
    titulo: PropTypes.string,
    awards: PropTypes.string,
    genre: PropTypes.string
}

export default Pelicula;