import React from 'react';

function Pelicula(props) {

    let genres = ['Acción', 'Drama', 'Ciencia ficción', 'Misterio'];


    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>Rating: {props.rating}</p>
            <p>Awards: {props.awards}</p>
            <ul>
                { genres.map(genre => {
                    return <li> {genre} </li>
                })}
            </ul>
        </div>
    );
  }

export default Pelicula;