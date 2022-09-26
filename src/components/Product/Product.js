import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
const Product = ({product, cartHandler}) => {
    const {name, seller, price, ratings, img} = product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h1>{name}</h1>
                <p style={{marginTop: -10}}>Price: ${price}</p>
                <div className='small-text'>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {ratings} starts</p>
                </div>
            </div>
            <button onClick={()=>cartHandler(product)} className='btn-cart'>
                <p style={{marginRight: 5}}>Add to cart</p>
                <FontAwesomeIcon icon={faCartPlus} />
            </button>
        </div>
    );
};

export default Product;