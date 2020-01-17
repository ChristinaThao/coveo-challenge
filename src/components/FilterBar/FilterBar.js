import React from 'react';

import FilterCriteria from '../FilterCriteria/FilterCriteria';

const FilterBar = () => {
    const category = {title: "Category", options: ["Vin", "Spiritueux", "Gin"]}
    return (
        <div>
            <FilterCriteria criteria={category}/>
        </div>
    )
}

export default FilterBar;