import { useState, useEffect, useRef } from 'react'

function RickMortyHook() {
    const [ personajes, setPersonajes ] = useState([]);
    const [ pagina, setPagina ] = useState(2);

    const subtitle = useRef();

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

    const cambiarH2 = () => {
        subtitle.current.style.color = 'red';
        subtitle.current.innerText = 'Subtitle cambiado con useRef';
    }

    return (
        <div>
            <h2 ref={subtitle}>Soy el componente Rick & Morty HOOK</h2>
            <button onClick={cambiarH2}>Cambiar subtitulo H2</button>
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