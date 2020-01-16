import React, {useContext, useEffect, useState}from 'react';

import Product from '../Product/Product';
import './DisplayProducts.scss';

import { ApiGetParamsContext } from '../../context/ApiGetParamsContext';

const DisplayProducts = ({correctedSearchWord, displayedProducts}) => {
    const [apiGetParams, setApiGetParams] = useContext(ApiGetParamsContext);

    if (displayedProducts != undefined) {
        return (
            <div className="display-results">
                <div className="query-params">
                    {apiGetParams.q.length > 0 && apiGetParams.q != null ? (<div>Resultat pour: {apiGetParams.q}</div>) : ''}
                </div>
                <div className="display-products">
                    {displayedProducts.map(displayedProduct => 
                        (<Product title={displayedProduct.raw.systitle} price={displayedProduct.raw.tpprixnum}
                            image={displayedProduct.raw.tpthumbnailuri} key={displayedProduct.raw.tpcodesaq}/>))}
                </div>
            </div>
           )
    } else {
        return (
            <div>
                {apiGetParams.q > 0 && apiGetParams.q != null ? (<div>Aucun resultat trouver pour: {apiGetParams.q}.</div>) : (<div></div>)}
                {correctedSearchWord.length > 0 && correctedSearchWord != null ? (<div>Voulez-vous dire: {correctedSearchWord}.</div>) : (<div></div>)}
            </div>
        )
    }
}

export default DisplayProducts;