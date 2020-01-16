import React, {createContext, useState} from 'react';

export const UriContext = createContext();

export const UriProvider = props => {
    const [uri, setUri] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <UriContext.Provider value={[uri, setUri, currentPage, setCurrentPage]}>
            {props.children}
        </UriContext.Provider>
    )
}
