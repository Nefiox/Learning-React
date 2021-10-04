import React, {Component} from 'react';

class RickMortyClass extends Component {
    constructor() {
        super();
        this.state = {
            personajes: [],
            pagina: 1
        }
    }

    componentDidMount() {
        console.log('%cSe montó el componente', 'color: green');
    
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(data => {
            this.setState({
                personajes: data.results
            })
        })
        .catch(err => console.log(err))
    }

    componentDidUpdate() {
        console.log('%cSe acutalizó el componente', 'color: yellow');
    }

    componentWillUnmount() {
        console.log('%cSe desmontó el componente', ' color: red');
    }

    cargarMas = async () => {
        await this.setState({ pagina: this.state.pagina + 1 });
        console.log(this.state.pagina);
        console.log(`https://rickandmortyapi.com/api/character?page=${this.state.pagina}`);

        fetch(`https://rickandmortyapi.com/api/character?page=${this.state.pagina}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                personajes: data.results
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h2>Soy el componente Rick & Morty CLASS</h2>
                <ul>
                    { this.state.personajes.length === 0 && <p>Cargando</p> }
                    {
                        this.state.personajes.map((personaje, i) => {
                            return (
                                <li key={i}>
                                    <h3>{personaje.name}</h3>
                                    <img src={personaje.image} alt="avatar" width="150" />
                                </li>
                            )
                        })
                    }
                    <button onClick={this.cargarMas}>Siguiente página</button>
                </ul>
            </div>
        )
    }
}


export default RickMortyClass;