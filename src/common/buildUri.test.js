import React from 'react';
import Enzyme, { mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import buildUri from './buildUri';

Enzyme.configure({ adapter: new Adapter() });

describe('buildUri', () => {
    it('should create basic uri', () => {
        const params = {
            q: "", 
            sortCriteria: "", 
            currentPage: 1, 
            size: 12, 
            enableDidYouMean: true, 
            filterCriteria: {price: []}
        };
        let uri = buildUri("", params);
        const expectedOutput = "&enableDidYouMean=true&numberOfResults=12";
        expect(uri).toEqual(expectedOutput);
    });

    it('should create uri with query', () => {
        const params = {
            q: "gin", 
            sortCriteria: "", 
            currentPage: 1, 
            size: 12, 
            enableDidYouMean: true, 
            filterCriteria: {price: []}
        };
        let uri = buildUri("", params);
        const expectedOutput = "&q=gin&enableDidYouMean=true&numberOfResults=12";
        expect(uri).toEqual(expectedOutput);
    });

    it('should create uri with query, sort criteria and a different first result index', () => {
        const params = {
            q: "gin", 
            sortCriteria: "@tpprixnum descending", 
            currentPage: 3, 
            size: 12, 
            enableDidYouMean: true, 
            filterCriteria: {price: []}
        };
        let uri = buildUri("", params);
        const expectedOutput = "&q=gin&enableDidYouMean=true&sortCriteria=@tpprixnum descending&firstResult=24&numberOfResults=12";
        expect(uri).toEqual(expectedOutput);
    });
});