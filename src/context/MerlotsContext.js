import React, {createContext, useState} from 'react';

export const MerlotsContext = createContext();

export const MerlotsProvider = props => {
    const [merlots, setMerlots] = useState([]);

    return (
        <MerlotsContext.Provider value={[merlots, setMerlots]}>
            {props.children}
        </MerlotsContext.Provider>
    )
}
