import React, {useContext, useEffect, useState}from 'react';

import Product from '../Product/Product';
import './DisplayProducts.scss';

import { DisplayedProductsContext } from '../../context/DisplayedProductsContext';
import { SearchWordContext } from '../../context/SearchWordContext';

const DisplayProducts = ({correctedSearchWord}) => {
    const [displayedProducts, setDisplayedProducts] = useContext(DisplayedProductsContext);
    const [searchWord, setSearchWord] = useContext(SearchWordContext);

    if (displayedProducts != undefined) {
        return (
            <div className="display-results">
                <div className="query-params">
                    {searchWord.length > 0 && searchWord != null ? (<div>Resultat pour: {searchWord}</div>) : ''}
                </div>
                <div className="display-products">
                    {displayedProducts.map(displayedProduct => 
                        (<Product title={displayedProduct.raw.systitle} price={displayedProduct.raw.tpprixnum}
                            image={displayedProduct.raw.tpthumbnailuri} key={displayedProduct.raw.tpcodesaq}/>))}
                </div>
                <div className="pagination">
                    
                </div>
            </div>
           )
    } else {
        return (
            <div>
                {searchWord.length > 0 && searchWord != null ? (<div>No results found for {searchWord}. Did you mean {correctedSearchWord}</div>) : (<div></div>)}
            </div>
        )
    }
}

export default DisplayProducts;