import React, {useEffect, useContext, useState} from 'react';

import DisplayProducts from '../components/DiplayedProducts/DisplayProducts';

import { DisplayedProductsContext } from '../context/DisplayedProductsContext';
import { SearchWordContext } from '../context/SearchWordContext';
import { UriContext } from '../context/UriContext';

const SearchResultPage = () => {
    const [displayedProducts, setDisplayedProducts] = useContext(DisplayedProductsContext);
    const [searchWord, setSearchWord] = useContext(SearchWordContext);
    const [uri, setUri] = useContext(UriContext);
    const [resultSize, setResultSize] = useState(12);
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [firstResultIndex, setFirstResultIndex] = useState(0);
    const [correctedSearchWord, setCorrectedSearchWord] = useState("");

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

    useEffect(() => {
        function filterWithSearchWord() {
            if (searchWord.length > 0) {
                //let newQuery = uri + encodeURI(`&sortCriteria=@tpmillesime descending`);
                let newQuery = uri + "&q=" + searchWord;
                setUri(newQuery);
            } else {
                setUri(initUri);
            }
        }
        filterWithSearchWord();
    },[searchWord])

    return (
        <DisplayProducts correctedSearchWord={correctedSearchWord}/>
    );
}

export default SearchResultPage;