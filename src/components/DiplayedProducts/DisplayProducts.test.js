import React from 'react';
import Enzyme, { mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import DisplayProducts from './DisplayProducts';

Enzyme.configure({ adapter: new Adapter() });

describe('DisplayProducts', () =>{
    let wrapper;
    let data = [
        {
            raw: {
                "systitle": "Distillerie De Montréal Rosemont Rhum Épicé",
                "tpprixnum": 37,
                "tpthumbnailuri": "http://s7d9.scene7.com/is/image/SAQ/14018359_is",
                "tpcodesaq": "00627843872610",
            }
        },
        {
            raw: {
                "systitle": "Distillerie de Montréal Orange Électrique",
                "tpprixnum": 23,
                "tpthumbnailuri": "http://s7d9.scene7.com/is/image/SAQ/14347961_is",
                "tpcodesaq": "14347961",
            }
        },

    ]

    beforeEach(() => {
        
    }) 

    it('loads DisplayProducts', () => {
        wrapper = mount(<DisplayProducts searchWord="" displayedProducts={[]}/>);
        expect(wrapper).not.toBeNull();
    });

    it('displays products', () => {
        wrapper = mount(<DisplayProducts searchWord="Montreal" displayedProducts={data}/>);
        expect(wrapper.find('p').at(0).text()).toEqual("Resultat pour: Montreal");
    })
});