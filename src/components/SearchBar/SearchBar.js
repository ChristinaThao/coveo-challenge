import React, {useContext, useState} from 'react';

import { SearchWordContext } from '../../context/SearchWordContext';
import { AmberAlesContext } from '../../context/AmberAlesContext';
import { BeersUnder10Context } from '../../context/BeersUnder10Context';
import { MerlotsContext } from '../../context/MerlotsContext';
import { DisplayedProductsContext } from '../../context/DisplayedProductsContext';

import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
    const [searchWord, setSearchWord] = useContext(SearchWordContext);
    const [keyword, setKeyword] = useState('');

    const [amberAles, setAmberAles] = useContext(AmberAlesContext);
    const [beersUnder10, setBeersUnder10] = useContext(BeersUnder10Context);
    const [merlots, setMerlots] = useContext(MerlotsContext);
    const [displayedProducts, setDisplayedProducts] = useContext(DisplayedProductsContext);

    const updateKeyword = (e) => {
        setKeyword(e.target.value);
    }

    const search = (e) => {
        e.preventDefault();
        setKeyword('');
        setDisplayedProducts([...amberAles, ...beersUnder10, ...merlots]);
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