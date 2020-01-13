import React, {createContext, useState} from 'react';

export const BeersUnder10Context = createContext();

export const BeersUnder10Provider = props => {
    const [beersUnder10, setBeersUnder10] = useState([]);

    return (
        <BeersUnder10Context.Provider value={[beersUnder10, setBeersUnder10]}>
            {props.children}
        </BeersUnder10Context.Provider>
    )
}
