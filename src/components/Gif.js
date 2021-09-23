import React, {Component} from 'react';
import './Pelicula.css'

class Gif extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gif: ""
        }
    }

    apiCall(url, consecuencia) {
        fetch(url)
        .then( res => res.json())
        .then( data => consecuencia(data))
        .catch( error => console.log(error));
    }

    traerGifNuevo() {
        this.apiCall('https://api.giphy.com/v1/gifs/random?api_key=YXWuXcT39KxyhvmHdXsYlOCKiQptAhJO', this.mostrarGif)
    }

    componentDidMount() {
        console.log('Me monté (Gif)');
        this.traerGifNuevo()
    }

    mostrarGif = (data) => {
        this.setState(
            {
                gif: data.data.image_url
            }
        )
    }

    componentDidUpdate() {
        console.log('Me actualicé (Gif)');
        alert('Tengo un gif nuevo')
    }


    render() {
        console.log('Estoy renderizando (Gif)');

        let contenido;
        if(this.state.gif === "") {
            contenido = <p>Cargando...</p>
        } else {
            contenido = <img src={this.state.gif} alt="Gif img"/>
        }


        return (
            <div>
                {contenido}
                <button onClick={ () => this.traerGifNuevo() }>Random Gif!</button>
            </div>
        );
    }
  }

export default Gif;