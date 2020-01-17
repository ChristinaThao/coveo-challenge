import React from 'react';

import FilterCriteriaDropdown from '../FilterCriteria/FilterCriteriaDropdown';
import FilterCriteriaByRange from '../FilterCriteria/FilterCriteriaByRange';

const FilterBar = () => {
    const category = {
        title: "Category",
        attribute: "category",
        options: [
            {name:"Champagne", value:"Champagne"}, 
            {name:"Gin", value:"Gin"},
            {name:"Spiritueux", value:"Spiritueux"}, 
            {name:"Vin", value:"Vin"}, 
        ]
    };
    const price = {
        title: "Price",
        attribute: "@tpprixnum=",
        min: 0,
        max: 999,
    };


    return (
        <div>
            <FilterCriteriaDropdown criteria={category}/>
            <FilterCriteriaByRange criteria={price}/>
        </div>
    )
}

export default FilterBar;