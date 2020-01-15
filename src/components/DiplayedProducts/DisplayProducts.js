import React, {useContext, useEffect, useState}from 'react';

import Product from '../Product/Product';

import { DisplayedProductsContext } from '../../context/DisplayedProductsContext';
import { SearchWordContext } from '../../context/SearchWordContext';


const DisplayProducts = () => {
    const [displayedProducts, setDisplayedProducts] = useContext(DisplayedProductsContext);
    const [searchWord, setSearchWord] = useContext(SearchWordContext);
    const [resultSize, setResultSize] = useState(20);
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [firstResultIndex, setFirstResultIndex] = useState(0);
    const [uri, setUri] = useState("");
    
    useEffect(() => {
        setUri(process.env.REACT_APP_SEARCH + process.env.REACT_APP_TOKEN + "&numberOfResults=" + resultSize);
    },[]);

    useEffect(() => {
        fetchData();
    },[uri]);

    async function fetchData() {
        const response = await fetch(uri); 
        const data = await response.json(); 
        let numOfPages =(data.totalCount / resultSize);
        numOfPages = Math.ceil(numOfPages);
        setNumberOfPages(numOfPages);
        setDisplayedProducts(data.results);
    }

    useEffect(() => {
        function filterWithSearchWord() {
            if (searchWord.length > 0) {
                let newQuery = uri + "&q=" + searchWord;
                setUri(newQuery);
            }
        }
        filterWithSearchWord();
    },[searchWord])
    
    if (displayedProducts.length > 0 && displayedProducts != undefined) {
        return (
            <div>
                {searchWord.length > 0 && searchWord != null ? (<div>Resultat pour: {searchWord}</div>) : ''}
                {displayedProducts.map(displayedProduct => 
                    (<Product title={displayedProduct.raw.systitle} 
                        image={displayedProduct.raw.tpthumbnailuri} key={displayedProduct.raw.tpcodesaq}/>))}
            </div>
           )
    } else {
        return <div>No Products Found</div>
    }
}

export default DisplayProducts;