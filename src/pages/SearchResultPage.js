import React, {useEffect, useContext, useState} from 'react';

import DisplayProducts from '../components/DiplayedProducts/DisplayProducts';
import Pagination from '../components/Pagination/Pagination';
import FilterBar from '../components/FilterBar/FilterBar';
import SortCriteria from '../components/SortCriteria/SortCriteria';

import { UriContext } from '../context/UriContext';
import { ApiGetParamsContext } from '../context/ApiGetParamsContext';

import './SearchResultPage.scss';

const SearchResultPage = () => {
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [apiGetParams, setApiGetParams] = useContext(ApiGetParamsContext);
    const [uri, setUri] = useContext(UriContext);
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [correctedSearchWord, setCorrectedSearchWord] = useState("");

    useEffect(() => {
        setApiGetParams({q: "", sortCriteria: "", currentPage: 1, size: 12, enableDidYouMean: true, filterCriteria: {category: "", price: []}});
    },[]);

    useEffect(() => {
        fetchData();
    },[uri]);

    useEffect(() => {
        let newUri = process.env.REACT_APP_SEARCH + process.env.REACT_APP_TOKEN;
        
        if (apiGetParams.q != "" && apiGetParams.q != undefined) {
            newUri = newUri + "&q=" + apiGetParams.q;
        }

        if (apiGetParams.filterCriteria != undefined) {
            const {price} = apiGetParams.filterCriteria;
            if(price.length == 2) {
                newUri = newUri.includes("&q=") ?  newUri + "&aq=@tpprixnum=" + price[0] + ".." + price[1] 
                    : newUri + "&q=@tpprixnum=" + price[0] + ".." + price[1];
            }
        }

        if (apiGetParams.sortCriteria != "" && apiGetParams.sortCriteria != undefined){
            newUri = newUri + "&sortCriteria=" + apiGetParams.sortCriteria;
        }

        if (apiGetParams.currentPage != 1  && apiGetParams.currentPage != undefined){
            let firstIndex = (apiGetParams.currentPage - 1)*apiGetParams.size;
            newUri = newUri + "&firstResult=" + firstIndex;
        }

        newUri = newUri + "&numberOfResults=" + apiGetParams.size;
        console.log(newUri);
        setUri(newUri);

    }, [apiGetParams])

    async function fetchData() {
        const response = await fetch(uri); 
        const data = await response.json(); 
        if (data.totalCount != 0) {
            let numOfPages =(data.totalCount / apiGetParams.size);
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
        <div className='result-page'>
            <div className='sidebar'>
                <FilterBar/>
            </div>
            <div className='main-body'>
                <div className='option'>
                    <SortCriteria/>
                    <Pagination numberOfPages={numberOfPages}/>
                </div>
                <br/>
                <DisplayProducts correctedSearchWord={correctedSearchWord} displayedProducts={displayedProducts}/>
                <br/>
                <div className='option'>
                    <Pagination numberOfPages={numberOfPages}/>
                </div>
            </div>
        </div>
    );
}

export default SearchResultPage;