import React, {useContext, useEffect, useState}from 'react';

import Product from '../Product/Product';
import './DisplayProducts.scss';

import { DisplayedProductsContext } from '../../context/DisplayedProductsContext';
import { SearchWordContext } from '../../context/SearchWordContext';


const DisplayProducts = () => {
    const [displayedProducts, setDisplayedProducts] = useContext(DisplayedProductsContext);
    const [searchWord, setSearchWord] = useContext(SearchWordContext);
    const [resultSize, setResultSize] = useState(18);
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [firstResultIndex, setFirstResultIndex] = useState(0);
    const [uri, setUri] = useState("");
    const initUri = process.env.REACT_APP_SEARCH + process.env.REACT_APP_TOKEN + "&numberOfResults=" + resultSize;
    useEffect(() => {
        setUri(initUri);
    },[]);

    useEffect(() => {
        fetchData();
    },[uri]);

    async function fetchData() {
        const response = await fetch(uri); 
        const data = await response.json(); 
        if (data.totalCount != 0) {
            let numOfPages =(data.totalCount / resultSize);
            numOfPages = Math.ceil(numOfPages);
            setNumberOfPages(numOfPages);
            setDisplayedProducts(data.results);
        } else {
            setNumberOfPages(0);
            setDisplayedProducts(undefined);
        }
    }

    useEffect(() => {
        function filterWithSearchWord() {
            if (searchWord.length > 0) {
                let newQuery = uri + "&q=" + searchWord;
                setUri(newQuery);
            } else {
                setUri(initUri);
            }
        }
        filterWithSearchWord();
    },[searchWord])
    
    if (displayedProducts != undefined) {
        return (
            <div className="display-results">
                <div className="query-params">
                    {searchWord.length > 0 && searchWord != null ? (<div>Resultat pour: {searchWord}</div>) : ''}
                </div>
                <div className="display-products">
                    {displayedProducts.map(displayedProduct => 
                        (<Product title={displayedProduct.raw.systitle} 
                            image={displayedProduct.raw.tpthumbnailuri} key={displayedProduct.raw.tpcodesaq}/>))}
                </div>
                <div className="pagination">
                    
                </div>
            </div>
           )
    } else {
        return <div>No Products Found</div>
    }
}

export default DisplayProducts;