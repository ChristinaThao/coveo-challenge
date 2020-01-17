import React, {createContext, useState} from 'react';

export const ApiGetParamsContext = createContext();

export const ApiGetParamsProvider = props => {
    const [apiGetParams, setApiGetParams] = useState({q: "", sortCriteria: "", 
        currentPage: 1, size: 12, enableDidYouMean: true, filterCriteria: {price: []}});
    return (
        <ApiGetParamsContext.Provider value={[apiGetParams, setApiGetParams]}>
            {props.children}
        </ApiGetParamsContext.Provider>
    )
}
