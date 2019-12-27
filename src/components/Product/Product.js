import React from 'react';
import './Product.scss';

const Product = ({title, image}) => {
    return (
        <div className='product'>
            <img src={image} alt="" className='image'/>
            <div className='title'>{title}</div>
        </div>
    );
}

export default Product;