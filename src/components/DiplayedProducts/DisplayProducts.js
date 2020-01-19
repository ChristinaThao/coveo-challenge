import React, {useContext, useEffect, useState}from 'react';

import Product from '../Product/Product';
import './DisplayProducts.scss';

const DisplayProducts = ({displayedProducts, searchWord}) => {
        return (
            <div className="display-results">
                <div className="query-params">
                    {searchWord != undefined  && searchWord.length > 0  ? (<p>Resultat pour: {searchWord}</p>) : ''}
                </div>
                <div className="display-products">
                    {(displayedProducts != undefined && displayedProducts.length > 0) ? displayedProducts.map(displayedProduct => 
                        (<Product title={displayedProduct.raw.systitle} price={displayedProduct.raw.tpprixnum}
                            image={displayedProduct.raw.tpthumbnailuri} key={displayedProduct.raw.tpcodesaq}/>)) : (<div></div>)}
                </div>
            </div>
        )
}

export default DisplayProducts;