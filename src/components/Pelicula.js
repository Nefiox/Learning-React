import React from 'react';

function Pelicula(props) {



    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>Rating: {props.rating}</p>
            <p>Awards: {props.awards}</p>
            <ul>
                { props.genres.map((genre, i) => {
                    return <li key = {genre + i}> {genre} </li>
                })}
            </ul>
        </div>
    );
  }

export default Pelicula;