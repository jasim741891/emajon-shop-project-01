import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({ product, handleAddToCard }) => {
    const { name, img, seller, price, ratings } = product

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>price : ${price}</p>
                <p><small>selle : {seller}</small></p>
                <p><small>rating : {ratings}</small></p>
            </div>
            <button onClick={() => handleAddToCard(product)} className='btn-cart'>
                <p className='btn-text'>add to card</p>
                <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>

            </button>
        </div>
    );
};

export default Product;