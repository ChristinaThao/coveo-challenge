import Enzyme from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import {setPageRangeValues} from './Pagination';

Enzyme.configure({ adapter: new Adapter() });

describe('setPageRangeValues', () => {
    it('should set initial page range', () => {
        let pageRange = setPageRangeValues(1, 10);
        expect(pageRange[0]).toEqual(1);
        expect(pageRange[1]).toEqual(2);
        expect(pageRange[2]).toEqual(3);
    });
    it('should display current page number, the prev and the next in the range', () => {
        let pageRange = setPageRangeValues(7, 10);
        expect(pageRange[0]).toEqual(6);
        expect(pageRange[1]).toEqual(7);
        expect(pageRange[2]).toEqual(8);
    }); 
    it('should display the 3 last page numbers', () => {
        let pageRange = setPageRangeValues(10, 10);
        expect(pageRange[0]).toEqual(8);
        expect(pageRange[1]).toEqual(9);
        expect(pageRange[2]).toEqual(10);
    }); 
})
