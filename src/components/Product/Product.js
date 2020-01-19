import React from 'react';

import './Product.scss';

const Product = ({product}) => {
    const {systitle, tpprixnum, tppays, tpthumbnailuri, sysclickableuri} = product;
    return (
        <a href={sysclickableuri}>
            <div className='product'>
                <img src={tpthumbnailuri} alt="" className='image'/>
                <div className='title'>{systitle}</div>
                <div className='details'>
                    <div className='country'>{tppays} |</div>
                    <div className='price'>${tpprixnum}</div>
                </div>
            </div>
        </a>
    );
}

export default Product;