import React from 'react';
import Enzyme from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import {render} from '@testing-library/react';

import SortCriteria, {sortCriteriaString} from './SortCriteria';
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

    it('should test sortCriteriaString', () => {
        let sortCriteria = sortCriteriaString("", "");
        expect(sortCriteria).toEqual("");
    });

    it('should test sortCriteriaString to get descending', () => {
        let sortCriteria = sortCriteriaString("@tpprixnum", "");
        expect(sortCriteria).toEqual("@tpprixnum descending");
    });

    it('should test sortCriteriaString to get ascending', () => {
        let sortCriteria = sortCriteriaString("@tpprixnum", "@tpprixnum descending");
        expect(sortCriteria).toEqual("@tpprixnum ascending");
    });
});