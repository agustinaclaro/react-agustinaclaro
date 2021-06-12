import './ProductDetail.scss'
import { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { getProductById } from '../../services/products';
import ItemCounter from '../ItemCount/ItemCount.js';
import { CartContext } from '../../Context/CartContext'

const ProductDetail = () => {
    const { addItem } = useContext(CartContext)

    const { id } = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        const getProduct = () => {
            getProductById(id)
                .then((data) => setProduct(data))
                .catch((error) => console.error('HUBO UN ERROR: ', error))
        }

        getProduct();
    }, []);

    const onAdd = (count) => {
        alert(`Agrego al carrito ${count} ${product.title}`)

    }
    return (

        <div id={product.id} className="card-pd container">
            <div className="card-body-pd">
                <h5 className="card-title-pd">{product.title}</h5>
                <p className="card-text-pd">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente iste iure deserunt accusamus bland iste iure deserunt accusamus blanditiis a provident dolorem fugiat laborum ipsum modi amet, quod suscipit veniam. !</p>
                <p className="card-price-pd">precio $:{product.price}</p>
                < ItemCounter stock={product.stock} initial={1} onAdd={onAdd} />
                <div className="buttonAddContainer">
                    <button className="buttonAdd" onClick={() => addItem(product, 1)}>AGREGAR AL CARRITO</button>
                </div>
            </div>

            <img src={product.imgUrl} className="card-img-top-pd" alt="..." />


        </div>
    )
};

export default ProductDetail;
