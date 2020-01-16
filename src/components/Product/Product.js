import React from 'react';
import './Product.scss';

const Product = ({title, image, price}) => {
    return (
        <div className='product'>
            <img src={image} alt="" className='image'/>
            <div className='title'>{title}</div>
            <div className='price'>$ {price}</div>
        </div>
    );
}

export default Product;