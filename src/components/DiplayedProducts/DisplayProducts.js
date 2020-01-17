import React, {useContext, useEffect, useState}from 'react';

import Product from '../Product/Product';
import './DisplayProducts.scss';

import { ApiGetParamsContext } from '../../context/ApiGetParamsContext';

const DisplayProducts = ({displayedProducts}) => {
    const [apiGetParams, setApiGetParams] = useContext(ApiGetParamsContext);
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
}

export default DisplayProducts;