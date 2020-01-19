import React from 'react';
import Enzyme from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import {render} from '@testing-library/react';

import SortCriteria from './SortCriteria';
import {ApiGetParamsContext} from '../../context/ApiGetParamsContext';

Enzyme.configure({ adapter: new Adapter() });

describe('SortCriteria', () => {

    function renderSortCriteria (context) {
        return render (
            <ApiGetParamsContext.Provider value={[context, null]}>
                <SortCriteria/>
            </ApiGetParamsContext.Provider>
        )
    }

    it('should load SortCriteria', () => {
        let context = {
            q: "", 
            sortCriteria: "", 
            currentPage: 1, 
            size: 12, 
            enableDidYouMean: true, 
            filterCriteria: {price: []}
        };
    
        const wrapper = renderSortCriteria(context);
        expect(wrapper).not.toBeNull();
    });

});