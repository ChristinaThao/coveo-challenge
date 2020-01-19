import React, { useContext } from 'react';

import { ApiGetParamsContext } from '../../context/ApiGetParamsContext';

import './SortCriteria.scss';

export function sortCriteriaString (value, currentCriteria) {
    let sort = "";

    if (value != "") {
        sort = value.toString();
        sort = currentCriteria.includes("desc") ? sort + " ascending" : sort + " descending";
    }

    return sort;    
}

const SortCriteria = () => {
    const [apiGetParams, setApiGetParams] = useContext(ApiGetParamsContext);

    function updateSortCriteria(e) {
        let sort = sortCriteriaString(e.target.value, apiGetParams.sortCriteria);
        setApiGetParams({...apiGetParams, sortCriteria: sort});
    }

    return (
        <div className='sort-options'>
            <button value="" className='sort-option' onClick={e => updateSortCriteria(e)}>Relevance</button>
            <button value="@tpprixnum" className='sort-option' onClick={e => updateSortCriteria(e)}>Prix</button>
            <button value="@tpmillesime" className='sort-option' onClick={e => updateSortCriteria(e)}>Millesime</button>
        </div>
    )
}

export default SortCriteria;