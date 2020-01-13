import React, {createContext, useState} from 'react';

export const DisplayedProductsContext = createContext();

export const DisplayedProductsProvider = props => {
    const [displayedProducts, setDisplayedProducts] = useState([]);

    return (
        <DisplayedProductsContext.Provider value={[displayedProducts, setDisplayedProducts]}>
            {props.children}
        </DisplayedProductsContext.Provider>
    )
}
