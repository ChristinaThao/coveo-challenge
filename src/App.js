import React from 'react';

import SearchResultPage from './pages/SearchResultPage';
import SearchBar from './components/SearchBar/SearchBar';

import { SearchWordProvider } from './context/SearchWordContext';
import { AmberAlesProvider } from './context/AmberAlesContext';
import { BeersUnder10Provider } from './context/BeersUnder10Context';
import { MerlotsProvider } from './context/MerlotsContext';
import { DisplayedProductsProvider } from './context/DisplayedProductsContext';

require('dotenv').config();

function App () {
    return (
        <div>
            <SearchWordProvider>
                <AmberAlesProvider>
                    <BeersUnder10Provider>
                        <MerlotsProvider>
                            <DisplayedProductsProvider>
                                <SearchBar/>
                                <SearchResultPage/>
                            </DisplayedProductsProvider>
                        </MerlotsProvider>
                    </BeersUnder10Provider>
                </AmberAlesProvider>
            </SearchWordProvider>
        </div>
    )
};

export default App;