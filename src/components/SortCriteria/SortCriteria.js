import React, { useContext } from 'react';

import { ApiGetParamsContext } from '../../context/ApiGetParamsContext';

import './SortCriteria.scss';

const SortCriteria = () => {
    const [apiGetParams, setApiGetParams] = useContext(ApiGetParamsContext);

    function updateSortCriteria(e) {

        let sort = "";

        if (e.target.value != "") {
            sort = e.target.value.toString();
            sort = apiGetParams.sortCriteria.includes("desc") ? sort + " ascending" : sort + " descending";
        }
 
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