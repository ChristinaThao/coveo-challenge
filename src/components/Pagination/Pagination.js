import React, {useContext, useState} from 'react';
import { UriContext } from '../../context/UriContext';

const Pagination = (numberOfPages) => {
    const [uri, setUri, currentPage, setCurrentPage] = useContext(UriContext);
    const [values, setValues] = useState([1, 2, 3, 4]);
    
    let onChangeCurrentPage = (e) => {
        console.log(e.target.value);
        setCurrentPage(e.target.value);
    }

    if (currentPage < 2) {
        let displayPageValues = [1, 2, 3, 4, Number(numberOfPages)];
        return (
            <div>
                {values.map(value => (<button value={value} onClick={e => onChangeCurrentPage(e)}>{value}</button>))}
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