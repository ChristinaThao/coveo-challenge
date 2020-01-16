import React, {useContext, useState} from 'react';

import { SearchWordContext } from '../../context/SearchWordContext';

import './SearchBar.scss';

import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
    const [searchWord, setSearchWord] = useContext(SearchWordContext);
    const [keyword, setKeyword] = useState('');

    const updateKeyword = (e) => {
        setKeyword(e.target.value);
    }

    const search = (e) => {
        e.preventDefault();
        let searchcriteria = keyword + "&enableDidYouMean=true"
        setSearchWord(searchcriteria);
        setKeyword('');
    }

    return (
        <div className='search-bar'>
            <form onSubmit={search} className='search-form'>
                <input type="text" name="searchWord" value={keyword} onChange={updateKeyword} className='keyword-input'/>
                <button type="submit" className='submit-button'>
                    <IoIosSearch size={'25px'}/>
                </button>
            </form>
        </div>
    )
}

export default SearchBar;