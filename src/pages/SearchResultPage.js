import React, {useEffect, useContext, useState} from 'react';

import DisplayProducts from '../components/DiplayedProducts/DisplayProducts';
import Pagination from '../components/Pagination/Pagination';

import { DisplayedProductsContext } from '../context/DisplayedProductsContext';
import { UriContext } from '../context/UriContext';
import { ApiGetParamsContext } from '../context/ApiGetParamsContext';

const SearchResultPage = () => {
    const [displayedProducts, setDisplayedProducts] = useContext(DisplayedProductsContext);
    const [apiGetParams, setApiGetParams] = useContext(ApiGetParamsContext);
    const [uri, setUri] = useContext(UriContext);
    const [resultSize, setResultSize] = useState(12);
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [correctedSearchWord, setCorrectedSearchWord] = useState("");

    const initUri = process.env.REACT_APP_SEARCH + process.env.REACT_APP_TOKEN;
    
    useEffect(() => {
        setApiGetParams({q: "", sortCriteria: "", currentPage: 1, size: 12, enableDidYouMean: true});
    },[]);

    useEffect(() => {
        fetchData();
    },[uri]);

    useEffect(() => {
        let newUri = process.env.REACT_APP_SEARCH + process.env.REACT_APP_TOKEN;
        
        if (apiGetParams.q != "" && apiGetParams.q != undefined) {
            newUri = newUri + "&q=" + apiGetParams.q;
        }

        if (apiGetParams.sortCriteria != "" && apiGetParams.sortCriteria != undefined){
            newUri = newUri + "&sortCriteria=" + apiGetParams.sortCriteria;
        }

        if (apiGetParams.currentPage != 1  && apiGetParams.currentPage != undefined){
            let firstIndex = (apiGetParams.currentPage - 1)*apiGetParams.size;
            newUri = newUri + "&firstResult=" + firstIndex;
        }

        newUri = newUri + "&numberOfResults=" + apiGetParams.size;
        setUri(newUri);

    }, [apiGetParams])

    async function fetchData() {
        const response = await fetch(uri); 
        const data = await response.json(); 
        if (data.totalCount != 0) {
            let numOfPages =(data.totalCount / resultSize);
            numOfPages = Math.ceil(numOfPages);
            setNumberOfPages(numOfPages);
            setDisplayedProducts(data.results);
            setCorrectedSearchWord("");
        } else {
            if(data.queryCorrections[0]) {
                let correctedWord = data.queryCorrections[0].correctedQuery;
                setCorrectedSearchWord(correctedWord);
            }
            setNumberOfPages(0);
            setDisplayedProducts(undefined);
        }
    }

    return (
        <div>
            <Pagination numberOfPages={numberOfPages}/>
            <DisplayProducts correctedSearchWord={correctedSearchWord}/>
        </div>
    );
}

export default SearchResultPage;