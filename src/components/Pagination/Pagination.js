import React, {useContext, useEffect, useState} from 'react';

import { ApiGetParamsContext } from '../../context/ApiGetParamsContext';

import './Pagination.scss';

const Pagination = ({numberOfPages}) => {
    const [apiGetParams, setApiGetParams] = useContext(ApiGetParamsContext);
    const [values, setValues] = useState([1, 2, 3, 4]);
    
    let onChangeCurrentPage = (e) => {
        setApiGetParams({...apiGetParams, currentPage: e.target.value});
    }

    useEffect(() => {
        let newValues = [];

        if (apiGetParams.currentPage <= 2) {
            newValues = [1, 2, 3, 4];
            setValues(newValues);
        } else if (apiGetParams.currentPage > 2 && apiGetParams.currentPage <= (numberOfPages-2)) {
            let prev = Number(apiGetParams.currentPage) - 1;
            let current = Number(apiGetParams.currentPage);
            let next = Number(apiGetParams.currentPage) + 1;
            newValues.push(prev);
            newValues.push(current);
            newValues.push(next);
            setValues(newValues);
        } else {
            let prev2 = Number(numberOfPages) - 2;
            let prevlast = Number(numberOfPages) - 1;
            let last = Number(numberOfPages);
            newValues.push(prev2);
            newValues.push(prevlast);
            newValues.push(last);
            setValues(newValues);
        }

    },[apiGetParams.currentPage])

    if (Number(apiGetParams.currentPage) <= 2) {
        return (
            <div className='page-numbers'>
                {values.map(value => (
                    <button className='page-number' value={value} key={value} onClick={e => onChangeCurrentPage(e)}>{value}</button>))}
                ...
                <button className='page-number' value={numberOfPages} key={numberOfPages} onClick={e => onChangeCurrentPage(e)}>{numberOfPages}</button>
            </div>
        )
    } else if (apiGetParams.currentPage > 2 && apiGetParams.currentPage <= (numberOfPages-2)) {
        return (
            <div className='page-numbers'>
                <button className='page-number' value={1} key={1} onClick={e => onChangeCurrentPage(e)}>1</button>
                ...
                {values.map(value => (
                    <button className='page-number' value={value} key={value} onClick={e => onChangeCurrentPage(e)}>{value}</button>))}
                ...
                <button className='page-number' value={numberOfPages} key={numberOfPages} onClick={e => onChangeCurrentPage(e)}>{numberOfPages}</button>
            </div>
        )
    }

    return (
        <div className='page-numbers'>
            <button className='page-number' value={1} key={1} onClick={e => onChangeCurrentPage(e)}>1</button>
            ...
            {values.map(value => (
                <button className='page-number' value={value} key={value} onClick={e => onChangeCurrentPage(e)}>{value}</button>))}
        </div>
    )

    
}

export default Pagination;