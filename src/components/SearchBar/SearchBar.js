import React, {useContext, useState} from 'react';

import { ApiGetParamsContext } from '../../context/ApiGetParamsContext';

import './SearchBar.scss';

import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
    const [keyword, setKeyword] = useState('');
    const [apiGetParams, setApiGetParams] = useContext(ApiGetParamsContext);

    const updateKeyword = (e) => {
        setKeyword(e.target.value);
    }

    const search = (e) => {
        e.preventDefault();
        setApiGetParams({q: keyword, sortCriteria: "", currentPage: 1, size: 12, enableDidYouMean: true});
        setKeyword('');
    }

    return (
        <div className='search-bar'>
            <form onSubmit={search} className='search-form'>
                <input type="text" name="keyword" value={keyword} onChange={updateKeyword} className='keyword-input'/>
                <button type="submit" className='submit-button'>
                    <IoIosSearch size={'25px'}/>
                </button>
            </form>
        </div>
    )
}

export default SearchBar;