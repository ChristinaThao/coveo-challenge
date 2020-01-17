import React, { useContext, useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { ApiGetParamsContext } from '../../context/ApiGetParamsContext';

import './FilterCriteria.scss';

const FilterCriteriaDropdown = ({criteria}) => {
    const [apiGetParams, setApiGetParams] = useContext(ApiGetParamsContext);
    const [value, setValue] = useState("");


    function onChangeOptions(e) {
        if (criteria.attribute="category") {
            setApiGetParams({q: e.target.value, sortCriteria: "", currentPage: 1, size: 12, enableDidYouMean: true, filterCriteria: {price: []}})
        }
    }
    return (
        <div className="criteria">
            <FormControl>
                <InputLabel id={criteria.title}>Category</InputLabel>
                <Select
                    labelId={criteria.title}
                    id={criteria.title}
                    value={value}
                    onChange={e => onChangeOptions(e)}
                    style={{width: '180px'}}
                >
                    {criteria.options.map(option => (
                         <MenuItem value={option.value} key={option.value}>{option.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}

export default FilterCriteriaDropdown;