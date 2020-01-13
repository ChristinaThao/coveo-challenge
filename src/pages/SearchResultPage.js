import React from 'react';

import { AmberAlesProvider } from '../context/AmberAlesContext';
import { BeersUnder10Provider } from '../context/BeersUnder10Context';
import { MerlotsProvider } from '../context/MerlotsContext';
import { DisplayedProductsProvider } from '../context/DisplayedProductsContext';

import DisplayProducts from '../components/DiplayedProducts/DisplayProducts';

const SearchResultPage = () => {
    return (
        <AmberAlesProvider>
            <BeersUnder10Provider>
                <MerlotsProvider>
                    <DisplayedProductsProvider>
                        <DisplayProducts/>
                    </DisplayedProductsProvider>
                </MerlotsProvider>
            </BeersUnder10Provider>
        </AmberAlesProvider>
    );
}

export default SearchResultPage;