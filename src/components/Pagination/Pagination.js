import React, {useContext, useState} from 'react';

import { ApiGetParamsContext } from '../../context/ApiGetParamsContext';

import './Pagination.scss';

const Pagination = (numberOfPages) => {
    const [apiGetParams, setApiGetParams] = useContext(ApiGetParamsContext);
    const [values, setValues] = useState([1, 2, 3, 4]);
    
    let onChangeCurrentPage = (e) => {
        console.log(e.target.value);
        setApiGetParams({...apiGetParams, currentPage: e.target.value});
    }

    if (apiGetParams.currentPage < 2) {
        let displayPageValues = [1, 2, 3, 4, Number(numberOfPages)];
        return (
            <div>
                {values.map(value => (
                    <button className='page-number' value={value} onClick={e => onChangeCurrentPage(e)}>{value}</button>))}
            </div>
        )
        
    }
    return (
        <div>
            {values.map(value => (<button value={value} onClick={e => onChangeCurrentPage(e)}>{value}</button>))}
        </div>
    )
}

export default Pagination;