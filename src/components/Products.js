import { Link } from 'react-router-dom';

const productsList = [
    {
    "id": 1,
    "name": "Nike Air Max Pre-Day",
    "description": "nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at",
    "price": 4546.82
  }, {
    "id": 2,
    "name": "Nike Phantom GT Elite Dynamic",
    "description": "nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris",
    "price": 1911.5
  }, {
    "id": 3,
    "name": "LeBron 18 Low Summer",
    "description": "luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id",
    "price": 2529.66
  }, {
    "id": 4,
    "name": "Nike Canyon",
    "description": "suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus",
    "price": 4930.59
  }, {
    "id": 5,
    "name": "Nike Phantom GT Elite Dynamic",
    "description": "eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in",
    "price": 3482.77
  }
]

function Products(props) {
    let id = Number(props.match.params.id);
    let product = productsList.find(oneProduct => oneProduct.id === id);
    return (
        <div>
            <h2>Soy el componente PRODUCTS</h2>
            <Link to="/products/1">Product 1</Link>
            <Link to="/products/2">Product 2</Link>
            <Link to="/products/3">Product 3</Link>
            {
                product &&
                <>
                    <p>ID: {product.id}</p>
                    <p>Nombre: {product.name}</p>
                    <p>Precio: {product.price}</p>
                    <p>Descripción: {product.description}</p>
                </>
            }
            {
                !product && <p>No hay productos con ese ID</p>
            }
        </div>
    );
}

export default Products;