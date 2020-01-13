import React, {createContext, useState} from 'react';

export const AmberAlesContext = createContext();

export const AmberAlesProvider = props => {
    const [amberAles, setAmberAles] = useState([]);

    return (
        <AmberAlesContext.Provider value={[amberAles, setAmberAles]}>
            {props.children}
        </AmberAlesContext.Provider>
    )
}
