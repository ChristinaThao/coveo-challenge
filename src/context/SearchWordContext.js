import React, {createContext, useState} from 'react';

export const SearchWordContext = createContext();

export const SearchWordProvider = props => {
    const [searchWord, setSearchWord] = useState([]);

    return (
        <SearchWordContext.Provider value={[searchWord, setSearchWord]}>
            {props.children}
        </SearchWordContext.Provider>
    )
}
