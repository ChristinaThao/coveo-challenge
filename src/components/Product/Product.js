import React from 'react';

import './Product.scss';

const Product = ({product}) => {
    const {systitle, tpprixnum, tpthumbnailuri, sysclickableuri} = product
    // title={displayedProduct.raw.systitle} price={displayedProduct.raw.tpprixnum}
    //                         image={displayedProduct.raw.tpthumbnailuri} 
    return (
        <a href={sysclickableuri}>
            <div className='product'>
                <img src={tpthumbnailuri} alt="" className='image'/>
                <div className='title'>{systitle}</div>
                <div className='price'>$ {tpprixnum}</div>
            </div>
        </a>
    );
}

export default Product;