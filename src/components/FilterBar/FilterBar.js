import React from 'react';

import FilterCriteria from '../FilterCriteria/FilterCriteria';
import FilterCriteriaByRange from '../FilterCriteria/FilterCriteriaByRange';

const FilterBar = () => {
    const category = {
        title: "Category",
        attribute: "",
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
            <FilterCriteria criteria={category}/>
            <FilterCriteriaByRange criteria={price}/>
        </div>
    )
}

export default FilterBar;