import React, {useContext, useState} from 'react';

import { SearchWordContext } from '../../context/SearchWordContext';
import { DisplayedProductsContext } from '../../context/DisplayedProductsContext';

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
        <div>
            <form onSubmit={search}>
                <input type="text" name="searchWord" value={keyword} onChange={updateKeyword}/>
                <button type="submit">
                    <IoIosSearch/>
                </button>
            </form>
        </div>
    )
}

export default SearchBar;