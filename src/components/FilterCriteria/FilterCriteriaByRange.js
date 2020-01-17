import React, { useContext, useState, useEffect } from 'react';
import Slider from '@material-ui/core/Slider';

import { ApiGetParamsContext } from '../../context/ApiGetParamsContext';

import './FilterCriteria.scss';
  

const FilterCriteriaByRange = ({criteria}) => {
    const [apiGetParams, setApiGetParams] = useContext(ApiGetParamsContext);
    const [value, setValue] = useState([criteria.min, criteria.max]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
      let newFilterCriteria = Object.assign({}, apiGetParams.filterCriteria);
      newFilterCriteria.price = value;
      setApiGetParams({...apiGetParams, filterCriteria: newFilterCriteria});
    };
  
    return (
        <div className="criteria">
            <h3>{criteria.title}</h3>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                max={criteria.max}
                min={criteria.min}
                style={{width: '85%'}}
            />
        </div>
    );
}

export default FilterCriteriaByRange;