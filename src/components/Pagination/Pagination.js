import React, {useContext, useState} from 'react';
import { UriContext } from '../../context/UriContext';

const Pagination = (numberOfPages) => {
    const [uri, setUri] = useContext(UriContext);
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div>
                
        </div>
    )
}

export default Pagination;