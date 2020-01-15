import React, {useContext, useState} from 'react';

import { SearchWordContext } from '../../context/SearchWordContext';
import { DisplayedProductsContext } from '../../context/DisplayedProductsContext';

import './SearchBar.scss';

import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
    const [searchWord, setSearchWord] = useContext(SearchWordContext);
    const [keyword, setKeyword] = useState('');

    const [displayedProducts, setDisplayedProducts] = useContext(DisplayedProductsContext);

    const updateKeyword = (e) => {
        setKeyword(e.target.value);
    }

    const search = (e) => {
        e.preventDefault();
        setKeyword('');
        setSearchWord(keyword);
    }

    return (
        <div className='search-bar'>
            <form onSubmit={search} className='search-form'>
                <input type="text" name="searchWord" value={keyword} onChange={updateKeyword} className='keyword-input'/>
                <button type="submit" className='submit-button'>
                    <IoIosSearch/>
                </button>
            </form>
        </div>
    )
}

export default SearchBar;