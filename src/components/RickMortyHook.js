import { useState, useEffect } from 'react'

function RickMortyHook() {
    const [ personajes, setPersonajes ] = useState([]);
    const [ pagina, setPagina ] = useState(2);

    useEffect( () => {
        console.log('%cSe montó el componente', 'color: green');
    
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(data => {
            setPersonajes(data.results)
        })
        .catch(err => console.log(err))
    }, []);

    useEffect( () => {
        console.log('%cSe acutalizó el componente', 'color: yellow');
    }, [personajes]);

    useEffect( () => {
        return () => console.log('%cSe desmontó el componente', ' color: red');
    }, []);

    const cargarMas = async () => {
        await setPagina( pagina + 1 );
        console.log(pagina);
        console.log(`https://rickandmortyapi.com/api/character?page=${pagina}`);

        fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)
        .then(res => res.json())
        .then(data => {
            setPersonajes(data.results)
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>Soy el componente Rick & Morty HOOK</h2>
            <ul>
                { personajes.length === 0 && <p>Cargando</p> }
                {
                    personajes.map((personaje, i) => {
                        return (
                            <li key={i}>
                                <h3>{personaje.name}</h3>
                                <img src={personaje.image} alt="avatar" width="150" />
                            </li>
                        )
                    })
                }
                <button onClick={cargarMas}>Siguiente página</button>
            </ul>
        </div>
    )
}

export default RickMortyHook;