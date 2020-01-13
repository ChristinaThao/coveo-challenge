import React, {useContext, useEffect}from 'react';

import { AmberAlesContext } from '../../context/AmberAlesContext';
import { BeersUnder10Context } from '../../context/BeersUnder10Context';

import Product from '../Product/Product';
import { DisplayedProductsContext } from '../../context/DisplayedProductsContext';
import { MerlotsContext } from '../../context/MerlotsContext';
import { SearchWordContext } from '../../context/SearchWordContext';

const DisplayProducts = () => {
    const [amberAles, setAmberAles] = useContext(AmberAlesContext);
    const [beersUnder10, setBeersUnder10] = useContext(BeersUnder10Context);
    const [merlots, setMerlots] = useContext(MerlotsContext);
    const [displayedProducts, setDisplayedProducts] = useContext(DisplayedProductsContext);
    const [searchWord, setSearchWord] = useContext(SearchWordContext);

    const rousseApi = process.env.REACT_APP_SEARCH + process.env.REACT_APP_TOKEN + process.env.REACT_APP_ROUSSE_API;
    const beerUnder10Api = process.env.REACT_APP_SEARCH + process.env.REACT_APP_TOKEN + process.env.REACT_APP_BEER_UNDER_10_API;
    const merlotApi = process.env.REACT_APP_SEARCH + process.env.REACT_APP_TOKEN + process.env.REACT_APP_MERLOT_API;

    useEffect(() => {
        async function fetchData() {
            const amberAlesResult = await getAmberAles();
            const beersUnder10Result = await getBeersUnder10();
            const merlotsResult = await getMerlots();
            setDisplayedProducts([...amberAlesResult, ...beersUnder10Result, ...merlotsResult])
        }
        fetchData();
    },[]);

    const getAmberAles = async () => {
        const response = await fetch(rousseApi);
        const data = await response.json();
        setAmberAles(data.results);
        return data.results;
    }

    const getBeersUnder10 = async () => {
        const response = await fetch(beerUnder10Api);
        const data = await response.json();
        setBeersUnder10(data.results);
        return data.results;
    }

    const getMerlots = async () => {
        const response = await fetch(merlotApi);
        const data = await response.json();
        setMerlots(data.results);
        return data.results;
    }

    if (displayedProducts.length > 0 ) {
           return (
               <div>
                   {searchWord.length > 0 ? (<div>SearchWord : {searchWord}</div>) : ''}
                   {displayedProducts.map(displayedProduct => 
                        (<Product title={displayedProduct.title} image={displayedProduct.raw.tpthumbnailuri} key={displayedProduct.raw.tpcodesaq}/>))}
               </div>
           )
    } else {
        return <div>No Products Found</div>
    }
}

export default DisplayProducts;