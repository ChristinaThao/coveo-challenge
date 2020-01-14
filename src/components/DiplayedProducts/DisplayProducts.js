import React, {useContext, useEffect}from 'react';

import Product from '../Product/Product';

import { AmberAlesContext } from '../../context/AmberAlesContext';
import { BeersUnder10Context } from '../../context/BeersUnder10Context';
import { MerlotsContext } from '../../context/MerlotsContext';
import { DisplayedProductsContext } from '../../context/DisplayedProductsContext';
import { SearchWordContext } from '../../context/SearchWordContext';


const DisplayProducts = () => {
    const [amberAles, setAmberAles] = useContext(AmberAlesContext);
    const [beersUnder10, setBeersUnder10] = useContext(BeersUnder10Context);
    const [merlots, setMerlots] = useContext(MerlotsContext);
    const [displayedProducts, setDisplayedProducts] = useContext(DisplayedProductsContext);
    const [searchWord, setSearchWord] = useContext(SearchWordContext);

    const amberAleApi = process.env.REACT_APP_SEARCH + process.env.REACT_APP_TOKEN + process.env.REACT_APP_ROUSSE_API;
    const beerUnder10Api = process.env.REACT_APP_SEARCH + process.env.REACT_APP_TOKEN + process.env.REACT_APP_BEER_UNDER_10_API;
    const merlotApi = process.env.REACT_APP_SEARCH + process.env.REACT_APP_TOKEN + process.env.REACT_APP_MERLOT_API;

    async function fetchApi (uri, setData) {
        const response = await fetch(uri);
        const data = await response.json();
        setData(data.results);
        return data.results;
    }

    useEffect(() => {
        async function fetchData() {
            const getAmberAles = fetchApi(amberAleApi, setAmberAles);
            const getBeersUnder10 = fetchApi(beerUnder10Api, setBeersUnder10);
            const getMerlots = fetchApi(merlotApi, setMerlots);

            const amberAlesResult = await getAmberAles;
            const beersUnder10Result = await getBeersUnder10;
            const merlotsResult = await getMerlots;
            setDisplayedProducts([...amberAlesResult, ...beersUnder10Result, ...merlotsResult])
        }
        fetchData();
    },[]);

    useEffect(() => {
        function filterWithSearchWord() {
            if (searchWord.length > 0) {
                let keyword = searchWord.toLowerCase();
                
                let filteredProducts = displayedProducts.filter(function(displayedProduct){

                    let title = "";
                    let country = "";
                    let producer = "";

                    if (displayedProduct.raw.systitle) {
                        title = displayedProduct.raw.systitle.toLowerCase();
                    }

                    if (displayedProduct.raw.tppays) {
                        country = displayedProduct.raw.tppays.toLowerCase();
                    }
                    if (displayedProduct.raw.tpproducteur) {
                        producer = displayedProduct.raw.tpproducteur.toLowerCase();
                    }
                    
                    if (title.includes(keyword) || country.includes(keyword) || producer.includes(keyword)) {
                        return displayedProduct;
                    } 
                });
                setDisplayedProducts(filteredProducts);
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