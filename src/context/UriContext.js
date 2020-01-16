import React, {createContext, useState} from 'react';

export const UriContext = createContext();

export const UriProvider = props => {
    const [uri, setUri] = useState("");
    
    return (
        <UriContext.Provider value={[uri, setUri]}>
            {props.children}
        </UriContext.Provider>
    )
}
