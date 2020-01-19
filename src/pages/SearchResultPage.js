import React, {useEffect, useContext, useState} from 'react';

import DisplayProducts from '../components/DiplayedProducts/DisplayProducts';
import Pagination from '../components/Pagination/Pagination';
import FilterBar from '../components/FilterBar/FilterBar';
import SortCriteria from '../components/SortCriteria/SortCriteria';

import { UriContext } from '../context/UriContext';
import { ApiGetParamsContext } from '../context/ApiGetParamsContext';

import './SearchResultPage.scss';

import buildUri from '../common/buildUri';

const SearchResultPage = () => {
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [apiGetParams, setApiGetParams] = useContext(ApiGetParamsContext);
    const [uri, setUri] = useContext(UriContext);
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [correctedSearchWord, setCorrectedSearchWord] = useState("");

    useEffect(() => {
        setApiGetParams({q: "", sortCriteria: "", currentPage: 1, size: 12, enableDidYouMean: true, filterCriteria: {price: []}});
    },[]);

    useEffect(() => {
        fetchData();
    },[uri]);

    useEffect(() => {
        let initUri = process.env.REACT_APP_SEARCH + process.env.REACT_APP_TOKEN;
        let newUri = buildUri(initUri, apiGetParams);
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

    let searchWithCorrectedWord = () => {
        setApiGetParams({...apiGetParams, q:correctedSearchWord});
        setCorrectedSearchWord("");
    }

    return (
        <div>
            { displayedProducts ? 
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
                        <DisplayProducts searchWord={apiGetParams.q} displayedProducts={displayedProducts}/>
                        <br/>
                        <div className='option'>
                            <Pagination numberOfPages={numberOfPages}/>
                        </div>
                    </div>
                </div> 
                : <div className='no-results'>
                    <div>
                        {apiGetParams.q.length > 0 && apiGetParams.q != null ? (<div>Aucun resultat trouver pour: {apiGetParams.q}.</div>) : (<div></div>)}
                        {correctedSearchWord.length > 0 && correctedSearchWord != null ? 
                            (<div>Voulez-vous dire: <button onClick={() => searchWithCorrectedWord()}>{correctedSearchWord}</button>.</div>) 
                            : (<div></div>)}
                    </div>
                </div>}
            
        </div>
    );
}

export default SearchResultPage;