import React, { useContext, useState } from 'react';

import { ApiGetParamsContext } from '../../context/ApiGetParamsContext';

import './FilterCriteria.scss';

const FilterCriteria = ({criteria}) => {
    const [apiGetParams, setApiGetParams] = useContext(ApiGetParamsContext);
    const [filters, setFilters] = useState([]);

    function onChangeOptions(e) {
        console.log(e.target.value);
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