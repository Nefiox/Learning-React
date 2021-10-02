import {useState} from 'react';
function Frutas() {
    const [listadoDeFrutas, setListadoDeFrutas] = useState(['Manzana', 'Pera', 'Banana']);

    return (
        <div>
            <h2>Soy el componente FRUTAS</h2>
            {
                listadoDeFrutas.map((fruta, i) => {
                    return <li key={i}>{fruta}</li>
                })
            }

            <button onClick={() => {
                setListadoDeFrutas([
                    ...listadoDeFrutas, "Naranja", "Uva", "Sandía"
                ])
            }}>
                Añadir más frutas
            </button>
        </div>
    );
}
export default Frutas;