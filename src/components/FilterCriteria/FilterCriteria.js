import React, { useContext, useState } from 'react';

import { ApiGetParamsContext } from '../../context/ApiGetParamsContext';

import './FilterCriteria.scss';

const FilterCriteria = ({criteria}) => {
    const [apiGetParams, setApiGetParams] = useContext(ApiGetParamsContext);

    function onChangeOptions(e) {
        if (criteria.attribute="category") {
            setApiGetParams({...apiGetParams, q: e.target.value, filterCriteria: {price: []}})
        }
    }
    return (
        <div className="criteria">
            <h3>{criteria.title}</h3>
            <form>
                {criteria.options.map(option => (
                   <div key={option.name}><input type="checkbox" value={option.value} onClick={e => onChangeOptions(e)}/>{option.name}</div>
                ))}
            </form>
        </div>
    )
}

export default FilterCriteria;