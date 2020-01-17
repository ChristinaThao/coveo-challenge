import React, { useContext } from 'react';

import { ApiGetParamsContext } from '../../context/ApiGetParamsContext';

const FilterCriteria = ({criteria}) => {
    const [apiGetParams, setApiGetParams] = useContext(ApiGetParamsContext);

    return (
        <div>
            <h3>{criteria.title}</h3>
            <form>
                {criteria.options.map(option => (
                   <div><input type="checkbox"/> {option}</div>
                ))}
            </form>
        </div>
    )
}

export default FilterCriteria;